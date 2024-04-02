package com.bootcamp.contiq.fileservice.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ElasticSearchDTO {
    private String id;
    private String fileName;
    private String fileId;
    private String path;
    private String content;
    private String userId;
    private Date createdAt;
}