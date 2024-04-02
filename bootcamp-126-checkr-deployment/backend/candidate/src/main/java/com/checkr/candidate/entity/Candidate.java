package com.checkr.candidate.entity;

import com.checkr.candidate.types.AdverseActions;
import com.checkr.candidate.types.Report;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "candidates")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Candidate {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="dob")
    private Date dob;

    @Column(name="age")
    private int age;

    @Column(name="location")
    private String location;

    @Column(name="phone")
    private BigInteger phone;

    @Column(name="zipcode")
    private String zipcode;

    @Column(name="social_security")
    private String socialSecurity;

    @Column(name="driver_license")
    private String driverLicense;

    @Column(name="created_at")
    private LocalDateTime createdAt;

    @Column(name="updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "candidate",cascade = CascadeType.ALL)
    private List<CandidateCourtSearch> candidateCourtSearch=new ArrayList<>();

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json",name="adverse_actions")
    private AdverseActions adverseActions;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "json",name="report")
    private Report report;

}
