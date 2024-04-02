package com.bootcamp.contiq.fileservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FileUpdateRequestBody {
    private String content;
    private String userId;
}
