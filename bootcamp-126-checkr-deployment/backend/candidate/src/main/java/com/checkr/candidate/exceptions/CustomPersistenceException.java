package com.checkr.candidate.exceptions;

public class CustomPersistenceException extends RuntimeException{
    public CustomPersistenceException(String message){
        super(message);
    }
}
