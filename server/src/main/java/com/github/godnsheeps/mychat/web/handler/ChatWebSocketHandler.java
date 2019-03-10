package com.github.godnsheeps.mychat.web.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.godnsheeps.mychat.MyChatServerApplication;
import com.github.godnsheeps.mychat.domain.ChatRepository;
import com.github.godnsheeps.mychat.domain.Message;
import com.github.godnsheeps.mychat.domain.MessageRepository;
import com.github.godnsheeps.mychat.domain.UserRepository;
import com.github.godnsheeps.mychat.util.Functions;
import io.jsonwebtoken.Jwts;
import lombok.Data;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.Logger;
import reactor.util.Loggers;
import reactor.util.function.Tuple2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * ChatWebSocketHandler
 *
 * @author jcooky
 * @since 2019-01-27
 */
@Component
public class ChatWebSocketHandler implements WebSocketHandler {
    private static Logger log = Loggers.getLogger(ChatWebSocketHandler.class);

    private List<WebSocketSession> sessions = Collections.synchronizedList(new ArrayList<>());

    private ObjectMapper objectMapper;
    private MessageRepository messageRepository;
    private ChatRepository chatRepository;
    private UserRepository userRepository;

    @Autowired
    public ChatWebSocketHandler(ObjectMapper objectMapper,
                                ChatRepository chatRepository,
                                UserRepository userRepository) {
        this.objectMapper = objectMapper;
        this.chatRepository = chatRepository;
        this.userRepository = userRepository;
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        sessions.add(session);

        log.trace("sessions: {}", sessions.size());

        return session.receive()
                .doOnComplete(() -> {
                    sessions.remove(session);
                })
                .map(Functions.wrapError(m -> objectMapper.readValue(m.getPayloadAsText(), RequestPayload.class)))
                .flatMap(payload -> {
                    val userId = Jwts.parser().setSigningKey(MyChatServerApplication.SECRET_KEY)
                            .parseClaimsJws(payload.fromToken)
                            .getBody().getId();
                    return Mono.zip(userRepository.findById(userId),
                            chatRepository.findById(MyChatServerApplication.rootChatId),
                            Mono.just(payload));
                })
                .flatMap(t -> {
                    val user = t.getT1();
                    val chat = t.getT2();
                    val message = t.getT3().message;
                    return Mono.zip(Mono.just(message),
                            messageRepository.save(Message.builder()
                                        .chat(chat)
                                        .from(user)
                                        .text(message)
                                        .build()));
                })
                .map(t -> {
                    var p = new ResponsePayload();
                    p.setText(t.getT1());
                    p.setUsername(t.getT2().getFrom().getName());
                    return p;
                })
                .map(Functions.wrapError(objectMapper::writeValueAsString))
                .flatMap(m -> Flux.fromStream(sessions.stream())
                        .filter(s -> s != session)
                        .flatMap(s -> s.send(Mono.just(s.textMessage(m)))))
                .collectList()
                .then();
    }

    @Data
    public static class RequestPayload {
        String fromToken;
        String message;
    }

    @Data
    public static class ResponsePayload {
        String username;
        String text;
    }
}
