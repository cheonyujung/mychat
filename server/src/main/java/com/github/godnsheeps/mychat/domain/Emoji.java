package com.github.godnsheeps.mychat.domain;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Emoji {
    @DBRef
    private User from;

    @Id
    private String id;

    private String text;
}
