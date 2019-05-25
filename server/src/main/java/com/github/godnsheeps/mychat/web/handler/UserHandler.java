package com.github.godnsheeps.mychat.web.handler;

import com.github.godnsheeps.mychat.domain.MessageRepository;
import com.github.godnsheeps.mychat.domain.UserRepository;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import java.util.HashMap;

@Component
public class UserHandler {

    private UserRepository userRepository;
    private MessageRepository messageRepository;
    private ChatWebSocketHandler chatWebSocketHandler;

    @Autowired
    public UserHandler(UserRepository userRepository, MessageRepository messageRepository) {
        this.userRepository = userRepository;
        this.messageRepository = messageRepository;
    }

    public Mono<ServerResponse> getUserByName(ServerRequest request) {
        val name = request.queryParam("name").orElseThrow();

        return userRepository.findByName(name)
                .flatMap(user -> ServerResponse.ok().syncBody(user))
                .switchIfEmpty(ServerResponse.notFound().build())
                .onErrorResume(IllegalArgumentException.class, e -> {
                    return ServerResponse.status(HttpStatus.INTERNAL_SERVER_ERROR).syncBody(e.getMessage());
                });
    }

    public Mono<ServerResponse> setUserName(ServerRequest request) {
        val data = request.bodyToMono(HashMap.class);
        return data.flatMap(nameSet ->
                    userRepository.findByName(nameSet.get("name").toString())
                    .flatMap(user -> {
                        user.setName(nameSet.get("newName").toString());
                        //chatWebSocketHandler.notifyChangedUserName(user);
                        return userRepository.save(user);
                    }))
                .flatMap(user -> ServerResponse.ok().syncBody(user))
                .switchIfEmpty(ServerResponse.notFound().build())
                .onErrorResume(IllegalArgumentException.class, e -> {
                    return ServerResponse.status(HttpStatus.INTERNAL_SERVER_ERROR).syncBody(e.getMessage());
                });
    }

    public Mono<ServerResponse> getUserByGitHubId(ServerRequest request) {
        val gitHubid = request.queryParam("id").orElseThrow();
        return userRepository.findByGithubId(Integer.valueOf(gitHubid))
                .flatMap(user -> ServerResponse.ok().syncBody(user))
                .switchIfEmpty(ServerResponse.notFound().build())
                .onErrorResume(IllegalArgumentException.class, e -> {
                    return ServerResponse.status(HttpStatus.INTERNAL_SERVER_ERROR).syncBody(e.getMessage());
                });
    }
//    public Mono<ServerResponse> getChatsByUser(ServerRequest req) {
//        val id = req.pathVariable("id");
//    }
}
