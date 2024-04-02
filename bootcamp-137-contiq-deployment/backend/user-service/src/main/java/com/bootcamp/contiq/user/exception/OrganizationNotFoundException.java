package com.bootcamp.contiq.user.exception;

import lombok.Getter;

@Getter
public class OrganizationNotFoundException extends RuntimeException{
    private final String message;

    public OrganizationNotFoundException(String message){
        this.message = message;
    }
}
