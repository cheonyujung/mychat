package com.github.godnsheeps.mychat.domain;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface EmojiRepository extends ReactiveMongoRepository<EmojiRepository, String> {
    Flux<Emoji> findByUser(User user);
}
