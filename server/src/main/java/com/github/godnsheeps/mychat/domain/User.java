package com.github.godnsheeps.mychat.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @author jcooky
 */
@Document
@Data
@Builder
public class User {
    @Id
    private String id;

    @Indexed
    private Integer githubId;
    
    private String name;

    private String avatarUrl;
}
