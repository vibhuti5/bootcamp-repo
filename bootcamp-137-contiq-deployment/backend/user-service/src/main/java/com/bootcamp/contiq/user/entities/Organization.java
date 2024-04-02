package com.bootcamp.contiq.user.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

@Entity
@Table(name="organization")
@Getter
@Setter
public class Organization {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @UuidGenerator
    private String id;

    @Column(name = "name", nullable = false)
    private String name;
}
