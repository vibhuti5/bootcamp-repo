package com.bootcamp.contiq.notificationservice.entity;

import com.bootcamp.contiq.notificationservice.enums.NotificationType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;

@Entity
@Table(name = "notification")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Notification {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @UuidGenerator
    private String id;

    @Column(name = "message")
    private String message;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private NotificationType type;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "files_id")
    private String filesId;

    @Column(name = "organization_id")
    private int organizationId;
}
