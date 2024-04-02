package com.bootcamp.contiq.fileservice.exception;

public class ElasticSearchException extends RuntimeException {
    public ElasticSearchException(String message) {
        super(message);
    }
}