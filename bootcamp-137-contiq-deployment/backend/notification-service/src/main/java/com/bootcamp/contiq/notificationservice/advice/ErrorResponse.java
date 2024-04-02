package com.bootcamp.contiq.notificationservice.advice;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class ErrorResponse {
    private long timestamp;
    private int status;
    private String title;
    private String message;
    private List<String> additionalInfo;
}
