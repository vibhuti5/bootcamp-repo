package com.bootcamp.contiq.fileservice.service.impl;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import com.bootcamp.contiq.fileservice.entity.ElasticSearch;
import com.bootcamp.contiq.fileservice.exception.ElasticSearchException;
import com.bootcamp.contiq.fileservice.repository.ElasticSearchFileRepository;
import com.bootcamp.contiq.fileservice.util.ElasticSearchMapper;
import com.bootcamp.contiq.fileservice.util.Helper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ElasticSearchServiceImplTest {

    @Mock
    private ElasticSearchFileRepository elasticSearchFileRepository;

    @Mock
    private ElasticSearchMapper elasticSearchMapper;
    @Mock
    private Helper pdfHelper;
    @InjectMocks
    private ElasticSearchServiceImpl elasticSearchService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void saveFile_Success() {
        ElasticSearchDTO fileDTO = new ElasticSearchDTO();
        fileDTO.setFileName("TestFile.pdf");
        fileDTO.setContent("Test content");
        fileDTO.setId("1");
        ElasticSearch fileEntity = new ElasticSearch();
        fileEntity.setId("1");

        when(elasticSearchMapper.mapFileDtoToElasticFile(any())).thenReturn(fileEntity);
        when(elasticSearchFileRepository.save(any())).thenReturn(fileEntity);

        ElasticSearchDTO savedFile = elasticSearchService.saveFile(fileDTO);

        assertNotNull(savedFile);
        assertEquals("1", savedFile.getId());
    }
    @Test
    void findBySearchTerm_Success() {
        String query = "test";
        ElasticSearch elasticSearch = new ElasticSearch();
        elasticSearch.setContent("test content");

        when(elasticSearchFileRepository.findAllByContent(query)).thenReturn(Collections.singletonList(elasticSearch));
        when(elasticSearchMapper.convertElasticFileToDto(any())).thenReturn(new ElasticSearchDTO());

        List<ElasticSearchDTO> result = elasticSearchService.findBySearchTerm(query);

        assertNotNull(result);
        assertFalse(result.isEmpty());
    }

    @Test
    void findBySearchTerm_NoResults() {
        String query = "nonexistent";
        when(elasticSearchFileRepository.findAllByContent(query)).thenReturn(Collections.emptyList());

        List<ElasticSearchDTO> result = elasticSearchService.findBySearchTerm(query);

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }
    @Test
    void findBySearchTerm_Exception() {
        String query = "someQuery";
        when(elasticSearchFileRepository.findAllByContent(query))
                .thenThrow(new RuntimeException("Search failed exception"));
        assertThrows(ElasticSearchException.class, () -> elasticSearchService.findBySearchTerm(query));

    }
    @Test
    void uploadFile_Success() throws Exception {
        MultipartFile file = createMockMultipartFile("TestFile.pdf", "Test content");
        String userId = "1";
        String filesId = "1";

        when(pdfHelper.extractTextFromPDF(any())).thenReturn("Test content");
        when(elasticSearchMapper.mapFileDtoToElasticFile(any())).thenReturn(new ElasticSearch());
        when(elasticSearchFileRepository.save(any())).thenReturn(new ElasticSearch());

        String fileId = elasticSearchService.uploadFile(file, userId, filesId);
        assertNotEquals("", fileId, "File ID should not be an empty string");

    }
    @Test
    void saveFile_ExceptionDuringSave() {
        ElasticSearchDTO fileDTO = new ElasticSearchDTO();
        fileDTO.setFileName("TestFile.pdf");
        fileDTO.setContent("Test content");

        when(elasticSearchMapper.mapFileDtoToElasticFile(any())).thenReturn(new ElasticSearch());
        when(elasticSearchFileRepository.save(any())).thenThrow(new RuntimeException("File save failed"));

        assertThrows(ElasticSearchException.class, () -> elasticSearchService.saveFile(fileDTO));
    }

    @Test
    void uploadFile_ExceptionDuringPDFExtraction() throws Exception {
        MultipartFile file = createMockMultipartFile("TestFile.pdf", "Test content");
        String userId = "1";
        String fileId = "1";

        when(pdfHelper.extractTextFromPDF(any())).thenThrow(new RuntimeException("PDF extraction failed"));

        assertThrows(ElasticSearchException.class, () -> elasticSearchService.uploadFile(file, userId, fileId));
    }
    @Test
    void uploadFile_Failure() throws Exception {
        MultipartFile file = createMockMultipartFile("InvalidFile.pdf", "Invalid content");
        String userId = "1";
        String fileId = "1";

        doThrow(new RuntimeException("PDF extraction failed")).when(pdfHelper).extractTextFromPDF(any());

        assertThrows(ElasticSearchException.class, () -> elasticSearchService.uploadFile(file, userId, fileId));
    }
    @Test
    void findBySearchTerm_EmptyQuery() {
        String emptyQuery = "";
        List<ElasticSearchDTO> result = elasticSearchService.findBySearchTerm(emptyQuery);

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }
    @Test
    void findBySearchTerm_NullQuery() {
        String nullQuery = null;
        List<ElasticSearchDTO> result = elasticSearchService.findBySearchTerm(nullQuery);

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }

    private MultipartFile createMockMultipartFile(String fileName, String content) {
        try {
            return new MockMultipartFile(fileName, fileName, "application/pdf", content.getBytes());
        } catch (Exception e) {
            throw new RuntimeException("Error creating mock MultipartFile", e);
        }
    }
}
