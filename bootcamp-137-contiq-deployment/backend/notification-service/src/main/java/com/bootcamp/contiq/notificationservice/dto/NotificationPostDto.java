package com.bootcamp.contiq.notificationservice.dto;

import com.bootcamp.contiq.notificationservice.enums.NotificationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NotificationPostDto {
    @NotNull
    @NotBlank
    private String message;

    @NotNull
    private LocalDateTime createdAt;

    @NotNull
    private LocalDateTime updatedAt;

    @NotNull
    private NotificationType type;

    @NotNull
    private String userId;

    @NotNull
    private String filesId;

    @NotNull
    private int organizationId;
}
