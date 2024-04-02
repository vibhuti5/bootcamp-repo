package com.checkr.candidate.service;

import com.checkr.candidate.dto.CandidateCourtSearchDto;
import com.checkr.candidate.entity.CandidateCourtSearch;
import com.checkr.candidate.repositary.CandidateCourtSearchRepository;
import com.checkr.candidate.dto.*;
import com.checkr.candidate.entity.Candidate;
import com.checkr.candidate.enums.AdjudicationStatus;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.repositary.CandidateRepository;
import com.checkr.candidate.types.Report;
import com.checkr.candidate.utils.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class CandidateServiceImpl implements CandidateService {
    @Autowired
    private CandidateCourtSearchRepository candidateCourtSearchRepository;
    @Autowired
    private CandidateRepository candidateRepository;

    private static final String CANDIDATE_ID_NOT_FOUND_MESSAGE = "Candidate ID not found ";

    @Override
    public List<CandidateCourtSearchDto> getCandidateCourtSearchesByCandidateId(int candidateId) {
        List<CandidateCourtSearch> candidateCourtSearches = candidateCourtSearchRepository.getCandidateCourtSearchesByCandidateId(candidateId);
        return candidateCourtSearches.stream()
                .map(this::convertToDto)
                .toList();
    }


    @Override
    public List<CandidateTableDto> getAllCandidates() {
        List<Candidate> candidates = this.candidateRepository.findAll();
        return candidates.stream()
                .map(candidate -> {
                    CandidateTableDto dto = Converter.convertToDTO(candidate, CandidateTableDto.class);
                    AdjudicationStatus adjudicationValue = candidate.getReport().getAdjudication();
                    if (adjudicationValue != null) {
                        dto.setAdjudication(adjudicationValue.displayName());
                    }
                    return dto;
                }).toList();
    }

    @Override
    public CandidateInfoDto getCandidateInfoById(Integer id) {
        Optional<Candidate> optionalCandidate = this.candidateRepository.findById(id);
        if (optionalCandidate.isPresent()) {
            Candidate candidate = optionalCandidate.get();
            return Converter.convertToDTO(candidate, CandidateInfoDto.class);
        } else {
            throw new RecordNotFoundException(CANDIDATE_ID_NOT_FOUND_MESSAGE + id);
        }
    }

    @Override
    public ReportInfoDto getCandidateReportInfoById(Integer id) {
        Optional<Candidate> optionalCandidate = this.candidateRepository.findById(id);
        if (optionalCandidate.isPresent()) {
            Candidate candidate = optionalCandidate.get();
            ReportInfoDto report = Converter.convertToDTO(candidate, ReportInfoDto.class);
            AdjudicationStatus adjudicationValue = candidate.getReport().getAdjudication();
            report.setAdjudication(adjudicationValue.displayName());
            return report;
        } else {
            throw new RecordNotFoundException(CANDIDATE_ID_NOT_FOUND_MESSAGE + id);
        }
    }

    @Override
    public ResponseDto updateCandidateById(CandidateUpdateDto candidateDto, Integer id) {
        Optional<Candidate> optionalCandidate = this.candidateRepository.findById(id);
        ResponseDto result = new ResponseDto();
        if (optionalCandidate.isPresent()) {
            LocalDateTime dateTime = LocalDateTime.now();
            DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
            String finalDateTime = dateTime.format(format);

            Candidate candidate = optionalCandidate.get();
            Report report = new Report();
            report.setPackages(candidate.getReport().getPackages());
            report.setCompleted_date(candidate.getReport().getCompleted_date());
            report.setAdjudication(candidateDto.getAdjudication());
            report.setStatus(candidateDto.getStatus());
            report.setCreated_at(candidate.getReport().getCreated_at());
            report.setUpdated_at(finalDateTime);
            candidate.setReport(report);
            candidateRepository.save(candidate);

            result.setMessage("Candidate data updated successfully");
            return result;
        } else {
            throw new RecordNotFoundException(CANDIDATE_ID_NOT_FOUND_MESSAGE + id);
        }
    }

    private CandidateCourtSearchDto convertToDto(CandidateCourtSearch candidateCourtSearch) {
        return new CandidateCourtSearchDto(
                candidateCourtSearch.getId(),
                candidateCourtSearch.getStatus(),
                candidateCourtSearch.getCourtSearch().getName(),
                candidateCourtSearch.getCreatedAt()
        );
    }
}
