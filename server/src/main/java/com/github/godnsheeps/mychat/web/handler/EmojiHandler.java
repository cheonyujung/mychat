package com.github.godnsheeps.mychat.web.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.godnsheeps.mychat.domain.EmojiRepository;
import com.github.godnsheeps.mychat.domain.UserRepository;
import com.github.godnsheeps.mychat.util.Functions;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import lombok.Builder;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.List;

@Component
public class EmojiHandler {

    private ObjectMapper objectMapper;
    private EmojiRepository emojiRepository;
    private UserRepository userRepository;

    @Autowired
    public EmojiHandler(ObjectMapper objectMapper, EmojiRepository emojiRepository, UserRepository userRepository) {
        this.objectMapper = objectMapper;
        this.emojiRepository = emojiRepository;
        this.userRepository = userRepository;
    }

    public Mono<ServerResponse> getEmojiByUser(ServerRequest request) {
        var userId = request.pathVariable("userId");

        Mono<List> result = userRepository.findById(userId)
                .flux()
                .flatMap(user -> emojiRepository.findByUser(user))
                .map(emoji -> ImmutableList.of(emoji.getText()))
                .map(Functions.wrapError(objectMapper::writeValueAsString))
                .collectList()
                .cast(List.class);

        return ServerResponse.ok().body(result, List.class);

    }
}
