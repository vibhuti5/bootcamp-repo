package com.checkr.candidate.controller;

import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.service.CandidateService;
import com.checkr.candidate.dto.CandidateCourtSearchDto;
import org.junit.jupiter.api.Assertions;
import com.checkr.candidate.dto.*;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;



class CandidateControllerTest {
    @InjectMocks
    private CandidateController candidateController;

    @Mock
    private CandidateService candidateService;

    {
        MockitoAnnotations.initMocks(this);
    }

    @Test
     void testGetCandidateCourtSearchByCandidateId() {
        int candidateId = 1;
        List<CandidateCourtSearchDto> expectedDtos = new ArrayList<>();
        CandidateCourtSearchStatus status=CandidateCourtSearchStatus.CLEAR;
        expectedDtos.add(new CandidateCourtSearchDto(1, status, "Court1", null));
        when(candidateService.getCandidateCourtSearchesByCandidateId(candidateId)).thenReturn(expectedDtos);
        ResponseEntity<List<CandidateCourtSearchDto>> response = candidateController.getCandidateCourtSearchByCandidateId(candidateId);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(expectedDtos, response.getBody());
    }

    @Test
     void testGetCandidateCourtSearchByCandidateIdError() {
        int candidateId = 1;
        when(candidateService.getCandidateCourtSearchesByCandidateId(candidateId)).thenThrow(new RecordNotFoundException("Error fetching adverse actions"));
        Assertions.assertThrows(RecordNotFoundException.class, () -> {
            candidateController.getCandidateCourtSearchByCandidateId(candidateId);
        });
    }

    @Test
    void testGetAllCandidates() {
        List<CandidateTableDto> candidateList = new ArrayList<>();
        when(candidateService.getAllCandidates()).thenReturn(candidateList);

        ResponseEntity<List<CandidateTableDto>> response = candidateController.getAllCandidates();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(candidateList, response.getBody());
    }

    @Test
    void testGetCandidateInfoById() {
        CandidateInfoDto candidateInfoDto = new CandidateInfoDto();
        when(candidateService.getCandidateInfoById(1)).thenReturn(candidateInfoDto);

        ResponseEntity<CandidateInfoDto> response = candidateController.getCandidateInfoById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(candidateInfoDto, response.getBody());
    }

    @Test
    void testGetCandidateReportInfoById() {
        ReportInfoDto reportInfoDto = new ReportInfoDto();
        when(candidateService.getCandidateReportInfoById(1)).thenReturn(reportInfoDto);

        ResponseEntity<ReportInfoDto> response = candidateController.getCandidateReportInfoById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(reportInfoDto, response.getBody());
    }

    @Test
    void testUpdateCandidateById() {
        CandidateUpdateDto candidateUpdateDto = new CandidateUpdateDto();
        ResponseDto responseDto = new ResponseDto();
        when(candidateService.updateCandidateById(candidateUpdateDto, 1)).thenReturn(responseDto);

        ResponseEntity<ResponseDto> response = candidateController.updateCandidateById(candidateUpdateDto, 1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(responseDto, response.getBody());
    }
}
