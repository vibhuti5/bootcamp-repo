package com.checkr.candidate.controller;

import com.checkr.candidate.dto.AdverseActionDto;
import com.checkr.candidate.dto.AdverseActionPostDto;
import com.checkr.candidate.dto.ResponseDto;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.service.AdverseActionService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;


class AdverseActionControllerTest {
    @Mock
    private AdverseActionService adverseActionService;
    @InjectMocks
    private AdverseActionController adverseActionController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllAdverseActions() {
        List<AdverseActionDto> expectedDtos = new ArrayList<>();
        Mockito.when(adverseActionService.getAllAdverseActions()).thenReturn(expectedDtos);
        ResponseEntity<List<AdverseActionDto>> responseEntity = adverseActionController.getAllAdverseActions();
        Assertions.assertEquals(expectedDtos, responseEntity.getBody());
    }
    @Test
    void testGetAllAdverseActionsWithError() {
        Mockito.when(adverseActionService.getAllAdverseActions()).thenThrow(new RuntimeException("Test exception"));
        Assertions.assertThrows(RecordNotFoundException.class, () -> adverseActionController.getAllAdverseActions());
    }

    @Test
    void testSaveAdverseAction() {
        int candidateId = 1;
        AdverseActionPostDto adverseActionPostDto = new AdverseActionPostDto();
        ResponseDto expectedResponse = new ResponseDto("Saved successfully");
        Mockito.when(adverseActionService.saveAdverseAction(adverseActionPostDto, candidateId)).thenReturn(expectedResponse);
        ResponseDto responseDto = adverseActionController.saveAdverseAction(adverseActionPostDto, candidateId);
        Assertions.assertEquals(expectedResponse, responseDto);
    }
}
