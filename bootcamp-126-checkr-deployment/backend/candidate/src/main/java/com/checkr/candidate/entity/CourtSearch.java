package com.checkr.candidate.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="court_searches")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourtSearch {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="name")
    private String name;
    @Column(name="created_at")
    private LocalDateTime createdAt;
    @Column(name="updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "courtSearch",cascade = CascadeType.ALL)
    private List<CandidateCourtSearch> candidateCourtSearch=new ArrayList<>();

}
