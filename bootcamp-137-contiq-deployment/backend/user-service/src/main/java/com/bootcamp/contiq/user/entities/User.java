package com.bootcamp.contiq.user.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table(name = "user")
@Getter
@Setter
public class User {
    @Id
    @Column(name = "id", unique = true, nullable = false)
    @UuidGenerator
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "unread_notification_count")
    private int unreadNotificationCount;

    @Column(name="password")
    private String password;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "organization_id")
    private Organization organization;
}
