package com.github.godnsheeps.mychat.domain;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface ChannelRepository extends ReactiveMongoRepository<Channel, String> {
}
