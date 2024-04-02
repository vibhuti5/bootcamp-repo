package com.bootcamp.contiq.user.service;

import java.util.Date;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.contiq.user.dto.request.AuthLoginDto;
import com.bootcamp.contiq.user.dto.request.NotificationDto;
import com.bootcamp.contiq.user.dto.request.ResetPasswordDTO;
import com.bootcamp.contiq.user.dto.request.UserLoginDTO;
import com.bootcamp.contiq.user.dto.request.UserSignupDTO;
import com.bootcamp.contiq.user.dto.response.LoginResponseDTO;
import com.bootcamp.contiq.user.dto.response.UserDTO;
import com.bootcamp.contiq.user.entities.Organization;
import com.bootcamp.contiq.user.entities.User;
import com.bootcamp.contiq.user.exception.InvalidPasswordException;
import com.bootcamp.contiq.user.exception.OrganizationNotFoundException;
import com.bootcamp.contiq.user.exception.PasswordFormatPolicyException;
import com.bootcamp.contiq.user.exception.UserNotFoundException;
import com.bootcamp.contiq.user.mapper.UserMapper;
import com.bootcamp.contiq.user.repository.IOrganisationRepository;
import com.bootcamp.contiq.user.repository.IUserRepository;
import com.bootcamp.contiq.user.util.DateUtil;
import com.bootcamp.contiq.user.util.JWTTokenUtil;
import com.bootcamp.contiq.user.util.PasswordSecurityUtil;

@Service
public class UserServiceImpl implements IUserService {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IOrganisationRepository organisationRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordSecurityUtil passwordSecurityUtil;

    @Autowired
    private JWTTokenUtil jwtTokenUtil;

    @Override
    public UserDTO getUserById(String id) {
        LOGGER.info("Get user by id {}.", id);
        Optional<User> user = userRepository.findById(id);
        UserDTO userDTO;
        if (user.isPresent()) {
            LOGGER.info("User with id {} found.", id);
            userDTO = userMapper.convertToDto(user.get());
        } else {
            LOGGER.info("User with id {} not found.", id);
            throw new UserNotFoundException("User not found.");
        }
        return userDTO;
    }

    @Override
    public boolean userSignup(UserSignupDTO userSignupDTO) {
        if (!passwordSecurityUtil.validateUserPassword(userSignupDTO.getPassword())) {
            throw new PasswordFormatPolicyException("New password does not apply to format policy");
        }

        Optional<Organization> organization = organisationRepository.findById("1");
        if (organization.isPresent()) {
            User user = new User();
            user.setOrganization(organization.get());
            user.setName(userSignupDTO.getName());
            user.setEmail(userSignupDTO.getEmail());
            user.setUnreadNotificationCount(0);
            user.setPassword(passwordSecurityUtil.encodePassword(userSignupDTO.getPassword()));
            userRepository.save(user);
        } else {
            throw new OrganizationNotFoundException("Invalid organization for user.");
        }
        return true;
    }

    @Override
    public LoginResponseDTO userLogin(UserLoginDTO userLoginDTO) {
        User user = userRepository.findByEmail(userLoginDTO.getEmail());
        if (user == null) {
            throw new UserNotFoundException("Invalid email/password.");
        }

        if (!passwordSecurityUtil.matchPassword(userLoginDTO.getPassword(), user.getPassword())) {
            throw new InvalidPasswordException("Invalid email/password.");
        }

        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
        loginResponseDTO.setExpiresIn(DateUtil.convertDateToString(jwtTokenUtil.calculateExpirationDate(new Date())));
        loginResponseDTO.setToken(jwtTokenUtil.generateToken(user));
        return loginResponseDTO;
    }

    @Override
    public boolean resetPassword(ResetPasswordDTO resetPasswordDTO) {
        User user = userRepository.findByEmail(resetPasswordDTO.getEmail());
        if (user == null) {
            throw new UserNotFoundException("User not found.");
        }
        user.setPassword(passwordSecurityUtil.encodePassword(resetPasswordDTO.getNewPassword()));
        userRepository.save(user);
        return true;
    }

    @Override
    public UserDTO getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UserNotFoundException("User not found.");
        }
        return userMapper.convertToDto(user);
    }

    @Override
    public UserDTO updateUserById(String id, NotificationDto notificationDto) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            LOGGER.info("User with id {} found.", id);
            user.get().setUnreadNotificationCount(notificationDto.getUnreadNotificationCount());
            userRepository.save(user.get());
            return userMapper.convertToDto(user.get());
        } else {
            LOGGER.info("User with id {} not found.", id);
            throw new UserNotFoundException("User not found.");
        }

    }

    @Override
    public LoginResponseDTO authLogin(AuthLoginDto authLoginDto) {
        User user = userRepository.findByEmail(authLoginDto.getEmail());
        if (user == null) {
            Optional<Organization> organization = organisationRepository.findById("1");
            if (organization.isPresent()) {
                User newUser = new User();
                newUser.setOrganization(organization.get());
                newUser.setName(authLoginDto.getName());
                newUser.setEmail(authLoginDto.getEmail());
                newUser.setUnreadNotificationCount(0);
                newUser.setPassword(null);
                userRepository.save(newUser);
                user = newUser;
            } else {
                throw new OrganizationNotFoundException("Invalid organization for user.");
            }

        }
        LoginResponseDTO loginResponseDTO = new LoginResponseDTO();
        loginResponseDTO.setExpiresIn(DateUtil.convertDateToString(jwtTokenUtil.calculateExpirationDate(new Date())));
        loginResponseDTO.setToken(jwtTokenUtil.generateToken(user));
        return loginResponseDTO;
    }

}
