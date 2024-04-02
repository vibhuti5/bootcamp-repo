package com.bootcamp.contiq.user.exception;

import lombok.Getter;

@Getter
public class PasswordFormatPolicyException extends RuntimeException{
    private final String message;
    public PasswordFormatPolicyException(String message) {
        this.message = message;
    }
}
