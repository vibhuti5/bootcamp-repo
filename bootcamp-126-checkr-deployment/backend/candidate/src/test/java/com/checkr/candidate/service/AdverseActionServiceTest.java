package com.checkr.candidate.service;

import com.checkr.candidate.dto.AdverseActionDto;
import com.checkr.candidate.dto.AdverseActionPostDto;
import com.checkr.candidate.dto.ResponseDto;
import com.checkr.candidate.entity.Candidate;
import com.checkr.candidate.enums.AdverseActionStatus;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.repositary.CandidateRepository;
import com.checkr.candidate.types.AdverseActions;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

 class AdverseActionServiceTest {
    @Mock
    private CandidateRepository candidateRepository;
    @InjectMocks
    private AdverseActionServiceImpl adverseActionService;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllAdverseActions() {
        List<Candidate> candidates = new ArrayList<>();
        Candidate candidate = new Candidate();
        AdverseActionStatus status = AdverseActionStatus.SCHEDULED;
        AdverseActions adverseActions = new AdverseActions();
        adverseActions.setStatus(status);
        candidate.setAdverseActions(adverseActions);
        candidates.add(candidate);
        Mockito.when(candidateRepository.findAll()).thenReturn(candidates);
        List<AdverseActionDto> adverseActionDtos = adverseActionService.getAllAdverseActions();
        Assertions.assertEquals(1, adverseActionDtos.size());
    }
    @Test
    void testSaveAdverseAction() {
        int candidateId = 1;
        Candidate candidate = new Candidate();
        Mockito.when(candidateRepository.findById(candidateId)).thenReturn(Optional.of(candidate));
        AdverseActionPostDto adverseActionPostDto = new AdverseActionPostDto();
        AdverseActionStatus status = AdverseActionStatus.SCHEDULED;
        adverseActionPostDto.setStatus(status);
        ResponseDto result = adverseActionService.saveAdverseAction(adverseActionPostDto, candidateId);
        Assertions.assertNotNull(result);
        Assertions.assertEquals("Candidate data updated successfully", result.getMessage());
        Assertions.assertNotNull(candidate.getAdverseActions());
        Assertions.assertEquals(adverseActionPostDto.getStatus(), candidate.getAdverseActions().getStatus());
    }
    @Test
    void testSaveAdverseActionCandidateNotFound() {
        int candidateId = 1;
        Mockito.when(candidateRepository.findById(candidateId)).thenReturn(Optional.empty());
        AdverseActionPostDto adverseActionPostDto = new AdverseActionPostDto();
        AdverseActionStatus status = AdverseActionStatus.SCHEDULED;
        adverseActionPostDto.setStatus(status);
        RecordNotFoundException exception = Assertions.assertThrows(RecordNotFoundException.class, () -> {
            adverseActionService.saveAdverseAction(adverseActionPostDto, candidateId);
        });
        Assertions.assertTrue(exception.getMessage().contains("Candidate with ID " + candidateId + " not found"));
    }

}
