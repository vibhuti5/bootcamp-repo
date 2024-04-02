package com.checkr.candidate.dto;

import com.checkr.candidate.enums.AdjudicationStatus;
import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateUpdateDto {
    private CandidateCourtSearchStatus status;
    private AdjudicationStatus adjudication;
}
