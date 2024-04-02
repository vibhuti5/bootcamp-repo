package com.checkr.candidate.dto;

import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CandidateTableDto {
    private int id;
    private String name;
    private String adjudication;
    private CandidateCourtSearchStatus status;
    private String location;
    private LocalDateTime createdAt;
}
