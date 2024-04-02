package com.bootcamp.contiq.user.mapper;

import com.bootcamp.contiq.user.dto.response.UserDTO;
import com.bootcamp.contiq.user.entities.Organization;
import com.bootcamp.contiq.user.entities.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class UserMapperTest {
    @InjectMocks
    private UserMapper userMapper;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testBuildUserDTOFromUserShouldBuildDTO(){
        User user = populateUser();
        when(modelMapper.map(user, UserDTO.class)).thenReturn(populateUserDTO());
        UserDTO userDTO = userMapper.convertToDto(user);

        assertEquals("1", userDTO.getId());
        assertEquals("abc@xyz.com", userDTO.getEmail());
        assertEquals(1, userDTO.getUnreadNotificationCount());
        assertEquals("Name", userDTO.getName());
    }

    private User populateUser(){
        User user = new User();
        user.setId("1");
        user.setName("Name");
        user.setOrganization(new Organization());
        user.setUnreadNotificationCount(1);
        user.setEmail("abc@xyz.com");
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