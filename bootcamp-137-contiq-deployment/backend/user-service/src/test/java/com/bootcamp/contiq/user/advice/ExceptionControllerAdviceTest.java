package com.bootcamp.contiq.user.advice;

import com.bootcamp.contiq.user.exception.InvalidPasswordException;
import com.bootcamp.contiq.user.exception.OrganizationNotFoundException;
import com.bootcamp.contiq.user.exception.PasswordFormatPolicyException;
import com.bootcamp.contiq.user.exception.UserNotFoundException;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

class ExceptionControllerAdviceTest {
    @InjectMocks
    private ExceptionControllerAdvice controllerAdvice;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void handleUserNotFoundExceptionShouldReturnResponseEntityWithNotFoundStatus(){
        ResponseEntity<String> responseEntity = controllerAdvice.handleUserNotFoundException(new UserNotFoundException("User NOt Found."));
        Assertions.assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

    @Test
    void handlePasswordFormatPolicyExceptionShouldReturnResponseEntityWithBadRequestStatus(){
        ResponseEntity<String> responseEntity = controllerAdvice.handlePasswordFormatPolicyException(new PasswordFormatPolicyException("User not Found."));
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

    @Test
    void handleInvalidPasswordExceptionShouldReturnResponseEntityWithUnAuthorizedStatus(){
        ResponseEntity<String> responseEntity = controllerAdvice.handleInvalidPasswordException(new InvalidPasswordException("Invalid password."));
        Assertions.assertEquals(HttpStatus.UNAUTHORIZED, responseEntity.getStatusCode());
    }

    @Test
    void handleOrganizationNotFoundExceptionShouldReturnResponseEntityWithUnAuthorizedStatus(){
        ResponseEntity<String> responseEntity = controllerAdvice.handleOrganizationNotFoundException(new OrganizationNotFoundException("Invalid organization."));
        Assertions.assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }

}

