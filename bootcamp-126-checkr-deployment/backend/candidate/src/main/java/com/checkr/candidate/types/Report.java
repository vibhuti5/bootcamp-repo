package com.checkr.candidate.types;

import com.checkr.candidate.enums.AdjudicationStatus;
import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Report  {
    private String packages;
    @Enumerated(EnumType.STRING)
    private AdjudicationStatus adjudication;
    @Enumerated(EnumType.STRING)
    private CandidateCourtSearchStatus status;
    private String completed_date;
    private String created_at;
    private String updated_at;
}
