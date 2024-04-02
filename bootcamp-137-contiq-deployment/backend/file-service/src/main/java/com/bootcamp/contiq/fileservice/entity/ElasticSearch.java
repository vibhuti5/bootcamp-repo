package com.bootcamp.contiq.fileservice.entity;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import java.util.Date;

@Document(indexName = "files")
@Data
public class ElasticSearch {
    @Id
    @Field(type = FieldType.Keyword)
    private String id;

    @Field(type = FieldType.Text)
    private String fileId;

    @Field(type = FieldType.Text)
    private String fileName;

    @Field(type = FieldType.Text)
    private String path;
    @Field(type = FieldType.Text)
    private String content;
    @Field(type = FieldType.Text)
    private String userId;

    @Field(type = FieldType.Date)
    private Date createdAt;
}
