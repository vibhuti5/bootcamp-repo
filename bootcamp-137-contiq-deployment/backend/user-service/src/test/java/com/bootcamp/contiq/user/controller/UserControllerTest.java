package com.bootcamp.contiq.user.controller;

import com.bootcamp.contiq.user.dto.request.*;
import com.bootcamp.contiq.user.dto.response.LoginResponseDTO;
import com.bootcamp.contiq.user.dto.response.UserDTO;
import com.bootcamp.contiq.user.service.UserServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserServiceImpl userService;


    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUserByIdWhenUserIsPresent() {
        when(userService.getUserById("1")).thenReturn(populateUserDTO());
        ResponseEntity<UserDTO> responseEntity = userController.getUserById("1");
        Assertions.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void testGetUserNotificationCountWhenValidUserIsPresent() {
        when(userService.getUserById("1")).thenReturn(populateUserDTO());
        ResponseEntity<Integer> responseEntity = userController.getUserNotificationCount("1");
        Assertions.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void testSignupUserWhenUserSignedUpSuccessfully() {
        UserSignupDTO userSignupDTO = new UserSignupDTO();
        when(userService.userSignup(userSignupDTO)).thenReturn(true);
        ResponseEntity<String> responseEntity = userController.signupUser(userSignupDTO);
        Assertions.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void testSignupUserWhenUserSignUpIsUnsuccessful() {
        UserSignupDTO userSignupDTO = new UserSignupDTO();
        when(userService.userSignup(userSignupDTO)).thenReturn(false);
        ResponseEntity<String> responseEntity = userController.signupUser(userSignupDTO);
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

    @Test
    void testResetPasswordWhenPasswordResetSuccessful() {
        ResetPasswordDTO resetPasswordDTO = new ResetPasswordDTO();
        when(userService.resetPassword(resetPasswordDTO)).thenReturn(true);
        ResponseEntity<String> responseEntity = userController.resetUserPassword(resetPasswordDTO);
        Assertions.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    @Test
    void testResetPasswordWhenPasswordResetUnsuccessful() {
        ResetPasswordDTO resetPasswordDTO = new ResetPasswordDTO();
        when(userService.resetPassword(resetPasswordDTO)).thenReturn(false);
        ResponseEntity<String> responseEntity = userController.resetUserPassword(resetPasswordDTO);
        Assertions.assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

    @Test
    void testUserLoginWhenLoginIsSuccessful() {
        UserLoginDTO userLoginDTO = new UserLoginDTO();
        when(userService.userLogin(userLoginDTO)).thenReturn(new LoginResponseDTO());
        ResponseEntity<LoginResponseDTO> responseEntity = userController.loginUser(userLoginDTO);
        Assertions.assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
    }

    private UserDTO populateUserDTO(){
        UserDTO userDTO = new UserDTO();
        userDTO.setId("1");
        userDTO.setName("Name");
        userDTO.setOrganisationId("1");
        userDTO.setUnreadNotificationCount(1);
        userDTO.setEmail("abc@xyz.com");
        return userDTO;
    }

    @Test
    void testGetUserByEmail() {
        String email = "abc@xyz.com";
        UserDTO expectedUserDTO = new UserDTO();

        when(userService.getUserByEmail(email)).thenReturn(expectedUserDTO);

        ResponseEntity<UserDTO> responseEntity = userController.getUserByEmail(email);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        UserDTO actualUserDTO = responseEntity.getBody();
        assertNotNull(actualUserDTO);
    }

    @Test
    void testUpdateUserById() {
        String userId = "someUserId";
        NotificationDto notificationDto = new NotificationDto();
        UserDTO expectedUserDTO = new UserDTO();

        when(userService.updateUserById(userId, notificationDto)).thenReturn(expectedUserDTO);

        ResponseEntity<UserDTO> responseEntity = userController.updateUserById(userId, notificationDto);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        UserDTO actualUserDTO = responseEntity.getBody();
        assertNotNull(actualUserDTO);
    }

    @Test
    void testAuthLogin() {
        AuthLoginDto authLoginDto = new AuthLoginDto();
        LoginResponseDTO expectedLoginResponse = new LoginResponseDTO();

        when(userService.authLogin(authLoginDto)).thenReturn(expectedLoginResponse);

        ResponseEntity<LoginResponseDTO> responseEntity = userController.authLogin(authLoginDto);

        assertNotNull(responseEntity);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());

        LoginResponseDTO actualLoginResponse = responseEntity.getBody();
        assertNotNull(actualLoginResponse);
    }

}
