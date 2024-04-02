package com.bootcamp.contiq.user.util;


import com.bootcamp.contiq.user.entities.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.util.ReflectionTestUtils;

@RunWith(MockitoJUnitRunner.class)
class JWTTokenUtilTest {

    @InjectMocks
    @Spy
    private JWTTokenUtil jwtTokenUtil;

    @BeforeEach
    public void setup(){
        MockitoAnnotations.openMocks(this);
        ReflectionTestUtils.setField(jwtTokenUtil, "expiration", 100L);
        ReflectionTestUtils.setField(jwtTokenUtil, "secret", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }

    @Test
    void testGenerateToken(){
        User mockUser = new User();
        mockUser.setId("asdasdn3");
        mockUser.setName("John Doe");
        mockUser.setEmail("abc@xyz.com");
        mockUser.setPassword("hashedPassword");

        String token = jwtTokenUtil.generateToken(mockUser);
        Assertions.assertNotNull(token);
    }
}
