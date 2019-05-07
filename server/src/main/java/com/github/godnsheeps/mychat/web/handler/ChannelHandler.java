package com.github.godnsheeps.mychat.web.handler;

import com.github.godnsheeps.mychat.MyChatServerApplication;
import com.github.godnsheeps.mychat.domain.Channel;
import com.github.godnsheeps.mychat.domain.ChannelRepository;
import com.github.godnsheeps.mychat.domain.ChatRepository;
import com.github.godnsheeps.mychat.domain.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.Logger;
import reactor.util.Loggers;

import java.util.List;

import static org.springframework.web.reactive.function.BodyInserters.fromObject;

@Component
public class ChannelHandler {
    private static final Logger log = Loggers.getLogger(ChannelHandler.class);

    private UserRepository userRepository;
    private ChatRepository chatRepository;
    private ChannelRepository channelRepository;

    @Autowired
    public ChannelHandler(ChannelRepository channelRepository, UserRepository userRepository, ChatRepository chatRepository) {
        this.userRepository = userRepository;
        this.chatRepository = chatRepository;
        this.channelRepository = channelRepository;
    }

    public Mono<ServerResponse> createChannel(ServerRequest request) {
        return request.bodyToMono(RequestPayload.class)
                .flatMap(requestPayload ->
                        Flux.fromStream(requestPayload.users.stream())
                            .flatMap(name -> userRepository.findByName(name))
                            .collectList()
                            .map(users -> Channel.builder().name(requestPayload.name).participant(users)))
                .flatMap(channelBuilder ->
                        chatRepository.findById(MyChatServerApplication.rootChatId)
                        .map(chat -> channelBuilder.chat(chat).build())
                        .flatMap(channelRepository::save))
                .log(log)
                .then(ServerResponse.ok().body(fromObject("OK")));
    }

    public Mono<ServerResponse> getChannels(ServerRequest request) {
        return channelRepository.findAll()
                .collectList()
                .flatMap(channels -> ServerResponse.ok().syncBody(channels));
    }

    @Data
    public static class RequestPayload {
        String name;
        List<String> users;
    }
}
