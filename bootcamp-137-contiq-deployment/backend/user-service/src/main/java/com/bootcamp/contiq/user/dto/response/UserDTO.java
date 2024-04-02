package com.bootcamp.contiq.user.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String id;

    private String name;

    private String email;

    private int unreadNotificationCount;

    private String organisationId;
}
