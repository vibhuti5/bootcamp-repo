package com.bootcamp.contiq.user.advice;

import com.bootcamp.contiq.user.exception.InvalidPasswordException;
import com.bootcamp.contiq.user.exception.OrganizationNotFoundException;
import com.bootcamp.contiq.user.exception.PasswordFormatPolicyException;
import com.bootcamp.contiq.user.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException userNotFoundException) {
        return new ResponseEntity<>(userNotFoundException.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PasswordFormatPolicyException.class)
    public ResponseEntity<String> handlePasswordFormatPolicyException(PasswordFormatPolicyException passwordFormatPolicyException) {
        return new ResponseEntity<>(passwordFormatPolicyException.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidPasswordException.class)
    public ResponseEntity<String> handleInvalidPasswordException(InvalidPasswordException invalidPasswordException) {
        return new ResponseEntity<>(invalidPasswordException.getMessage(), HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(OrganizationNotFoundException.class)
    public ResponseEntity<String> handleOrganizationNotFoundException(OrganizationNotFoundException organizationNotFoundException) {
        return new ResponseEntity<>(organizationNotFoundException.getMessage(), HttpStatus.NOT_FOUND);
    }
}