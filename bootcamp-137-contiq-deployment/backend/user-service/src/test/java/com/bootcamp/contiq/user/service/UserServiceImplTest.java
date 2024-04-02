package com.bootcamp.contiq.user.service;

import com.bootcamp.contiq.user.dto.request.*;
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
import com.bootcamp.contiq.user.util.JWTTokenUtil;
import com.bootcamp.contiq.user.util.PasswordSecurityUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceImplTest {
    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private IUserRepository userRepository;

    @Mock
    private IOrganisationRepository organisationRepository;

    @Mock
    private UserMapper userMapper;

    @Mock
    private JWTTokenUtil jwtTokenUtil;

    @Mock
    private PasswordSecurityUtil passwordSecurityUtil;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetUSerIdWhenUserWithIdIsPresent(){
        User user = populateUser();
        UserDTO userDTO = populateUserDTO();

        when(userRepository.findById("1")).thenReturn(Optional.of(user));
        when(userMapper.convertToDto(user)).thenReturn(userDTO);
        UserDTO userDTOResponse = userService.getUserById("1");
        assertNotNull(userDTOResponse);
        assertEquals("1", userDTOResponse.getId());
    }

    @Test
    void testGetUSerIdWhenUserWithIdIsNotPresent(){
        when(userRepository.findById("2")).thenReturn(Optional.empty());
        assertThrows(UserNotFoundException.class, () -> userService.getUserById("2"));
    }

    @Test
    void testUserSignupWhenPasswordWhenPasswordIsNotHavingProperFormat(){
        UserSignupDTO userSignupDTO = new UserSignupDTO();
        userSignupDTO.setPassword("abc");
        when(passwordSecurityUtil.validateUserPassword("abc")).thenReturn(false);
        assertThrows(PasswordFormatPolicyException.class, () -> userService.userSignup(userSignupDTO));
    }

    @Test
    void testUserSignupWhenOrganizationIsNotPresent(){
        UserSignupDTO userSignupDTO = new UserSignupDTO();
        userSignupDTO.setPassword("Password@123");
        when(passwordSecurityUtil.validateUserPassword("Password@123")).thenReturn(true);
        when(organisationRepository.findById("1")).thenReturn(Optional.empty());
        assertThrows(OrganizationNotFoundException.class, () -> userService.userSignup(userSignupDTO));
    }

    @Test
    void testUserSignupWhenValidUserData(){
        UserSignupDTO userSignupDTO = new UserSignupDTO();
        userSignupDTO.setPassword("Password@123");
        userSignupDTO.setName("ABC");
        userSignupDTO.setEmail("abc@pqr.com");
        when(passwordSecurityUtil.validateUserPassword("Password@123")).thenReturn(true);
        when(passwordSecurityUtil.encodePassword("Password@123")).thenReturn("123");

        Organization organization = new Organization();
        organization.setId("1");
        organization.setName("Organization");
        when(organisationRepository.findById("1")).thenReturn(Optional.of(organization));

        boolean isSignedUp = userService.userSignup(userSignupDTO);
        assertTrue(isSignedUp);
        verify(userRepository, times(1)).save(any());
    }

    @Test
    void testResetPasswordWhenUserNotFound(){
        ResetPasswordDTO resetPasswordDTO = new ResetPasswordDTO();
        resetPasswordDTO.setNewPassword("Password@123");
        resetPasswordDTO.setEmail("abc@xyz.com");
        when(userRepository.findByEmail("abc@xyz.com")).thenReturn(null);
        assertThrows(UserNotFoundException.class, () -> userService.resetPassword(resetPasswordDTO));
    }

    @Test
    void testResetPasswordWhenValidDataIsPassed(){
        ResetPasswordDTO resetPasswordDTO = new ResetPasswordDTO();
        resetPasswordDTO.setNewPassword("Password@123");
        resetPasswordDTO.setEmail("pqr@xyz.com");
        when(userRepository.findByEmail("pqr@xyz.com")).thenReturn(populateUser());
        when(passwordSecurityUtil.encodePassword("Password@123")).thenReturn("123");

        boolean isPasswordReset = userService.resetPassword(resetPasswordDTO);
        assertTrue(isPasswordReset);
        verify(userRepository, times(1)).save(any());
    }

    @Test
    void testUserLoginWhenUserNotFound(){
        UserLoginDTO userLoginDTO = new UserLoginDTO();
        userLoginDTO.setEmail("abc@xyz.com");
        when(userRepository.findByEmail("abc@xyz.com")).thenReturn(null);
        assertThrows(UserNotFoundException.class, () -> userService.userLogin(userLoginDTO));
    }

    @Test
    void testUserLoginWhenUserPasswordIsIncorrect(){
        UserLoginDTO userLoginDTO = new UserLoginDTO();
        userLoginDTO.setEmail("pqr@xyz.com");
        userLoginDTO.setPassword("Password@456");
        when(userRepository.findByEmail("pqr@xyz.com")).thenReturn(populateUser());
        when(passwordSecurityUtil.matchPassword("Password@456", "Password@123")).thenReturn(false);
        assertThrows(InvalidPasswordException.class, () -> userService.userLogin(userLoginDTO));
    }

    @Test
    void testUserLoginWhenValidUserDataIsPassed(){
        UserLoginDTO userLoginDTO = new UserLoginDTO();
        userLoginDTO.setEmail("abc@xyz.com");
        userLoginDTO.setPassword("Password@123");
        when(userRepository.findByEmail("abc@xyz.com")).thenReturn(populateUser());
        when(passwordSecurityUtil.matchPassword("Password@123", "Password@123")).thenReturn(true);
        when(jwtTokenUtil.calculateExpirationDate(any())).thenReturn(new Date());
        when(jwtTokenUtil.generateToken(any())).thenReturn("JWT_TOKEN");

        LoginResponseDTO loginResponseDTO = userService.userLogin(userLoginDTO);
        assertEquals("JWT_TOKEN", loginResponseDTO.getToken());
    }

    @Test
    void testGetUserByEmail() {
        String userEmail = "abc@xyz.com";
        User mockUser = new User();
        when(userRepository.findByEmail(userEmail)).thenReturn(mockUser);

        UserDTO result = userService.getUserByEmail(userEmail);
    }

    @Test
    void testUpdateUserById() {
        String userId = "someUserId";
        NotificationDto notificationDto = new NotificationDto();
        notificationDto.setUnreadNotificationCount(0);

        User mockUser = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(mockUser));

        UserDTO mockUserDTO = new UserDTO();
        when(userMapper.convertToDto(mockUser)).thenReturn(mockUserDTO);  // Mock the conversion

        UserDTO result = userService.updateUserById(userId, notificationDto);

        assertNotNull(result);
        assertEquals(notificationDto.getUnreadNotificationCount(), result.getUnreadNotificationCount());
    }

    @Test
    void testAuthLogin() {
        // Mock data
        AuthLoginDto authLoginDto = new AuthLoginDto();
        authLoginDto.setEmail("test@test.com");
        authLoginDto.setName("John Doe");

        User mockUser = new User();
        when(userRepository.findByEmail(authLoginDto.getEmail())).thenReturn(null);
        when(organisationRepository.findById("1")).thenReturn(Optional.of(new Organization()));
        when(jwtTokenUtil.calculateExpirationDate(any())).thenReturn(new Date());
        when(jwtTokenUtil.generateToken(mockUser)).thenReturn("mockToken");

        LoginResponseDTO result = userService.authLogin(authLoginDto);
    }

    private User populateUser(){
        User user = new User();
        user.setId("1");
        user.setName("Name");
        Organization organization = new Organization();
        organization.setName("Organization");
        organization.setId("1");
        user.setOrganization(organization);
        user.setUnreadNotificationCount(1);
        user.setEmail("abc@xyz.com");
        user.setPassword("Password@123");
        return user;
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
}
