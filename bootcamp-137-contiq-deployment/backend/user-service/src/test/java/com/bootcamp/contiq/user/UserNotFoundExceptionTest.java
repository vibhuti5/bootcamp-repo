package com.bootcamp.contiq.user;

import com.bootcamp.contiq.user.exception.UserNotFoundException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
class UserNotFoundExceptionTest {

    @Test
    void testUserNotFoundException(){
        UserNotFoundException userNotFoundException = new UserNotFoundException("User not found.");
        assertEquals("User not found.", userNotFoundException.getMessage());
    }
}
