package com.bootcamp.contiq.user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.contiq.user.dto.request.AuthLoginDto;
import com.bootcamp.contiq.user.dto.request.NotificationDto;
import com.bootcamp.contiq.user.dto.request.ResetPasswordDTO;
import com.bootcamp.contiq.user.dto.request.UserLoginDTO;
import com.bootcamp.contiq.user.dto.request.UserSignupDTO;
import com.bootcamp.contiq.user.dto.response.LoginResponseDTO;
import com.bootcamp.contiq.user.dto.response.UserDTO;
import com.bootcamp.contiq.user.service.IUserService;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private IUserService userService;

    @PostMapping("/reset-password")
    public ResponseEntity<String> resetUserPassword(@RequestBody ResetPasswordDTO resetPasswordDTO) {
        boolean isPasswordReset = userService.resetPassword(resetPasswordDTO);
        if (isPasswordReset) {
            return new ResponseEntity<>("Password reset successful.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Something went wrong!", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginUser(@RequestBody UserLoginDTO userSignupDTO) {
        LoginResponseDTO loginResponseDTO = userService.userLogin(userSignupDTO);
        return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable String id) {
        LOGGER.info("Get user by id {}", id);
        UserDTO userDTO = userService.getUserById(id);
        LOGGER.info("User with id {} with info {}.", id, userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @GetMapping("/{id}/notification")
    public ResponseEntity<Integer> getUserNotificationCount(@PathVariable String id) {
        LOGGER.info("Get user notification count for id {}", id);
        UserDTO userDTO = userService.getUserById(id);
        LOGGER.info("User notification count for id {} is {}.", id, userDTO.getUnreadNotificationCount());
        return new ResponseEntity<>(userDTO.getUnreadNotificationCount(), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signupUser(@RequestBody UserSignupDTO userSignupDTO) {
        boolean isSignedUp = userService.userSignup(userSignupDTO);
        if (isSignedUp) {
            return new ResponseEntity<>("User signup successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Something went wrong!", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<UserDTO> getUserByEmail(@PathVariable String email) {
        LOGGER.info("Get user by email {}", email);
        UserDTO userDTO = userService.getUserByEmail(email);
        LOGGER.info("User with email {} with info {}.", email, userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PatchMapping("/{id}/notification")
    public ResponseEntity<UserDTO> updateUserById(@PathVariable String id,
            @RequestBody NotificationDto notificationDto) {
        LOGGER.info("update user with id {} with info {}.", id, notificationDto);
        UserDTO userDTO = userService.updateUserById(id, notificationDto);
        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    @PostMapping("/google-login")
    public ResponseEntity<LoginResponseDTO> authLogin(@RequestBody AuthLoginDto authLoginDto) {
        LoginResponseDTO loginResponseDTO = userService.authLogin(authLoginDto);
        return new ResponseEntity<>(loginResponseDTO, HttpStatus.OK);
    }
}
