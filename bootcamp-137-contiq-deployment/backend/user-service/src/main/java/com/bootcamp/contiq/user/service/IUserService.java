package com.bootcamp.contiq.user.service;

import com.bootcamp.contiq.user.dto.request.AuthLoginDto;
import com.bootcamp.contiq.user.dto.request.NotificationDto;
import com.bootcamp.contiq.user.dto.request.ResetPasswordDTO;
import com.bootcamp.contiq.user.dto.request.UserLoginDTO;
import com.bootcamp.contiq.user.dto.request.UserSignupDTO;
import com.bootcamp.contiq.user.dto.response.LoginResponseDTO;
import com.bootcamp.contiq.user.dto.response.UserDTO;


public interface IUserService {
    UserDTO getUserById(String id);

    boolean userSignup(UserSignupDTO userSignupDTO);

    LoginResponseDTO userLogin(UserLoginDTO userLoginDTO);

    boolean resetPassword(ResetPasswordDTO resetPasswordDTO);

    UserDTO getUserByEmail(String email);

    UserDTO updateUserById(String id, NotificationDto notificationDto);

    LoginResponseDTO authLogin(AuthLoginDto authLoginDto);
}
