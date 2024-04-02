package com.bootcamp.contiq.fileservice.controller;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import com.bootcamp.contiq.fileservice.service.impl.ElasticSearchServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class ElasticSearchControllerTest {

    @Mock
    private ElasticSearchServiceImpl elasticSearchService;

    @InjectMocks
    private ElasticSearchController elasticSearchController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testFileUpload() throws IOException {
        when(elasticSearchService.uploadFile(any(MultipartFile.class), any(String.class), any(String.class)))
                .thenReturn("mockedFileId");

        MockMultipartFile file = new MockMultipartFile("file", "test.txt", "text/plain", "Hello, World!".getBytes());

        ResponseEntity<?> responseEntity = elasticSearchController.fileUpload(file, "1");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("mockedFileId", responseEntity.getBody());
    }

    @Test
    void testSearchForFile() {
        ElasticSearchDTO esFile=new ElasticSearchDTO();
        esFile.setFileId("1");
        esFile.setFileName("testFile.pdf");
        when(elasticSearchService.findBySearchTerm(any(String.class)))
                .thenReturn(Collections.singletonList(esFile));

        ResponseEntity<List<ElasticSearchDTO>> responseEntity = elasticSearchController.searchForFile("testQuery");

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(1, responseEntity.getBody().size());
        assertEquals("1", responseEntity.getBody().get(0).getFileId());
        assertEquals("testFile.pdf", responseEntity.getBody().get(0).getFileName());
    }
}

