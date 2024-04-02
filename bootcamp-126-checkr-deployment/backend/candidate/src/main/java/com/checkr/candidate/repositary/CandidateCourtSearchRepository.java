package com.checkr.candidate.repositary;

import com.checkr.candidate.dto.CandidateCourtSearchDto;
import com.checkr.candidate.entity.CandidateCourtSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidateCourtSearchRepository extends JpaRepository<CandidateCourtSearch,Integer> {
    @Query("SELECT c FROM CandidateCourtSearch c JOIN FETCH c.courtSearch WHERE c.candidate.id = :candidateId")
    List<CandidateCourtSearch> getCandidateCourtSearchesByCandidateId(@Param("candidateId") int candidateId);
}
