package com.bootcamp.contiq.fileservice.entity;

import com.bootcamp.contiq.fileservice.utils.AppConstants;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

@Entity
@Table(name = "files")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class File {

    @Id
    @Column(name = "id", unique = true, nullable = false)
    @UuidGenerator
    private String id;

    @Column(name = AppConstants.NAME, nullable = false)
    private String name;

    @Column(name = AppConstants.FILE_TYPE, nullable = false)
    private String fileType;

    @Lob
    @Column(name = AppConstants.CONTENT, nullable = false,columnDefinition = "LONGBLOB")
    private byte[] content;

    @Column(name = AppConstants.PATH)
    private String path;

    @CreatedDate
    @Column(name = AppConstants.CREATED_AT)
    private Date createdAt;

    @LastModifiedDate
    @Column(name = AppConstants.UPDATED_AT)
    private Date updatedAt;

    @Column(name = AppConstants.USER_ID)
    private String userId;

    @Column(name = "organization_id")
    private int organizationId;
}
