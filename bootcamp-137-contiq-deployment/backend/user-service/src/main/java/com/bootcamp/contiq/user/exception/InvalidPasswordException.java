package com.bootcamp.contiq.user.exception;

import lombok.Getter;

@Getter
public class InvalidPasswordException extends RuntimeException{
    private final String message;

    public InvalidPasswordException(String message) {
        super(message);
        this.message = message;
    }
}
