package com.checkr.candidate.dto;

import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateCourtSearchDto {
    private int id;
    private CandidateCourtSearchStatus status;
    private String name;
    private LocalDateTime date;
}
