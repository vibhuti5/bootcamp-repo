package com.checkr.candidate.service;

import com.checkr.candidate.dto.AdverseActionDto;
import com.checkr.candidate.dto.AdverseActionPostDto;
import com.checkr.candidate.dto.ResponseDto;
import com.checkr.candidate.entity.Candidate;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.repositary.CandidateRepository;
import com.checkr.candidate.types.AdverseActions;
import com.checkr.candidate.utils.DateFormatterUtil;
import jakarta.persistence.PersistenceException;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import org.slf4j.Logger;


@Service
public class AdverseActionServiceImpl implements AdverseActionService {

    @Autowired
    private CandidateRepository candidateRepository;
    private static final Logger logger = LoggerFactory.getLogger(AdverseActionServiceImpl.class);

    @Override
    public List<AdverseActionDto> getAllAdverseActions() {
        List<Candidate> candidates = candidateRepository.findAll();
        List<AdverseActionDto> adverseActionDtos = new ArrayList<>();
        for (Candidate candidate : candidates) {
            AdverseActions adverseAction = candidate.getAdverseActions();
            if (adverseAction != null) {
                AdverseActionDto dto = AdverseActionDto.convertAdverseActionToDto(adverseAction);
                if (dto != null) {
                    dto.setId(candidate.getId());
                    dto.setName(candidate.getName());
                    adverseActionDtos.add(dto);
                } else {
                    logger.error("Conversion from AdverseActions to AdverseActionDto failed.");
                }
            } else {
                logger.warn("AdverseActions is null for candidate with ID: {}", candidate.getId());
            }
        }
        return adverseActionDtos;
    }

        @Override
        public ResponseDto saveAdverseAction(AdverseActionPostDto adverseActionPostDto,int id){
            try {
                Optional<Candidate> candidateOptional = candidateRepository.findById(id);
                ResponseDto result = new ResponseDto();
                if (candidateOptional.isPresent()) {
                    String formattedDateTime = DateFormatterUtil.formatCurrentDateTime();
                    Candidate candidate = candidateOptional.get();
                    AdverseActions adverseActions = new AdverseActions();
                    adverseActions.setStatus(adverseActionPostDto.getStatus());
                    adverseActions.setPre_notice_date(adverseActionPostDto.getPreNoticeDate());
                    adverseActions.setPost_notice_date(adverseActionPostDto.getPostNoticeDate());
                    adverseActions.setCreated_at(formattedDateTime);
                    adverseActions.setUpdated_at(formattedDateTime);
                    candidate.setAdverseActions(adverseActions);
                    candidateRepository.save(candidate);
                    result.setMessage("Candidate data updated successfully");
                    return result;
                } else {
                    throw new RecordNotFoundException("Candidate with ID " + id + " not found");
                }
            } catch (PersistenceException ex) {
                throw new PersistenceException(ex.getMessage());
            }
        }
     }
