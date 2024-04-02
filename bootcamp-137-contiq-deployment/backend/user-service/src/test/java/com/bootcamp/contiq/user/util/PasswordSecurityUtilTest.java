package com.bootcamp.contiq.user.util;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;

class PasswordSecurityUtilTest {

    @InjectMocks
    private PasswordSecurityUtil passwordSecurityUtil;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testValidateUserPasswordWithValidPassword(){
        boolean isValid = passwordSecurityUtil.validateUserPassword("Password@123");
        Assertions.assertTrue(isValid);
    }

    @Test
    void testValidateUserPasswordWithInvalidPassword(){
        boolean isValid = passwordSecurityUtil.validateUserPassword("Password");
        Assertions.assertFalse(isValid);
    }

    @Test
    void testEncodePassword(){
       String encodedPassword = passwordSecurityUtil.encodePassword("Password@123");
       Assertions.assertTrue(passwordSecurityUtil.matchPassword("Password@123", encodedPassword));
    }
}
