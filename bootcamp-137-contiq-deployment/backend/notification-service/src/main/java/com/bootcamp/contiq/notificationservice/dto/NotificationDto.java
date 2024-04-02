package com.bootcamp.contiq.notificationservice.dto;

import com.bootcamp.contiq.notificationservice.enums.NotificationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NotificationDto {
    private String id;

    private String message;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private NotificationType type;

    private String userId;

    private String filesId;

    private int organizationId;
}
