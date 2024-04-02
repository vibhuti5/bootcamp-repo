package com.checkr.candidate.entity;

import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name="candidate_court_searches")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CandidateCourtSearch {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="status")
    @Enumerated(EnumType.STRING)
    private CandidateCourtSearchStatus status;
    @Column(name="created_at")
    private LocalDateTime createdAt;
    @Column(name="updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "court_searches_id")
    private CourtSearch courtSearch;

    @ManyToOne
    @JoinColumn(name="candidates_id")
    private Candidate candidate;

}
