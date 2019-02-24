package com.github.godnsheeps.mychat.domain;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

/**
 * @author jcooky
 */
public interface UserRepository extends ReactiveMongoRepository<User, String> {
    Mono<User> findByGithubId(Long githubId);
}
