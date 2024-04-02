package com.bootcamp.contiq.user.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordDTO {
    private String email;
    private String newPassword;
}
