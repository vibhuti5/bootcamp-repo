package com.bootcamp.contiq.user.mapper;

import com.bootcamp.contiq.user.dto.response.UserDTO;
import com.bootcamp.contiq.user.entities.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO convertToDto(User user) {
        return modelMapper.map(user, UserDTO.class);
    }
}
