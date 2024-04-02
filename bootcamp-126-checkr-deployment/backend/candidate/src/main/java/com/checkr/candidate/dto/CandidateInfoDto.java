package com.checkr.candidate.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateInfoDto {
    private int id;
    private String name;
    private String email;
    private Date dob;
    private int age;
    private BigInteger phone;
    private String zipcode;
    private String socialSecurity;
    private String driverLicense;
    private LocalDateTime createdAt;
}
