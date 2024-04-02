package com.bootcamp.contiq.fileservice.service.impl;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.bootcamp.contiq.fileservice.dto.FileUpdateRequestBody;
import com.bootcamp.contiq.fileservice.entity.File;
import com.bootcamp.contiq.fileservice.exception.FileCreationException;
import com.bootcamp.contiq.fileservice.exception.FileNotFoundException;
import com.bootcamp.contiq.fileservice.repository.FileRepo;

class FileServiceImplTest {

    @InjectMocks
    private FileServiceImpl fileService;

    @Mock
    private FileRepo fileRepo;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllFiles() {
        File file = new File();
        file.setId("0844a291-9728-4a3f-aefd-bfc14651a280");
        file.setName("dummy.pdf");
        file.setUpdatedAt(new Date());
        file.setCreatedAt(new Date());
        file.setPath("../path");
        file.setFileType("PDF");
        file.setUserId("1");
        file.setContent("Base64String".getBytes());

        Mockito.when(fileRepo.findAll()).thenReturn(List.of(file));
        List<File> result = fileService.getAllFiles();
        assertNotNull(result);
        Assertions.assertEquals(1, result.size());
    }

    @Test
    void getAllFilesWithException() {
        Mockito.when(fileRepo.findAll()).thenThrow(new RuntimeException("Simulated database error"));
        Assertions.assertThrows(FileNotFoundException.class, () -> fileService.getAllFiles());
        Mockito.verify(fileRepo, Mockito.times(1)).findAll();
    }

//    @Test
//    void createFile() {
//        File file = new File();
//        file.setName("dummy.pdf");
//        file.setFileType("PDF");
//        file.setPath("../path");
//        file.setUserId("1");
//
//        byte[] content = "Base64String".getBytes();
//        MultipartFile multipartFile = new MockMultipartFile("file", "dummy.pdf", "application/pdf", content);
//
//        Mockito.when(fileRepo.save(Mockito.any(File.class))).thenReturn(file);
//        File result = fileService.createFile(multipartFile, "../path", "1");
//
//        assertNotNull(result);
//        Assertions.assertEquals("dummy.pdf", result.getName());
//        Assertions.assertEquals("PDF", result.getFileType());
//        Assertions.assertEquals("../path", result.getPath());
//        Assertions.assertEquals("1", result.getUserId());
//    }

    @Test
    void createFileWithException() throws IOException {
        Mockito.when(fileRepo.save(Mockito.any())).thenThrow(new RuntimeException("Simulated database error"));
        Assertions.assertThrows(FileCreationException.class,
                () -> fileService.createFile(createMockMultipartFile(), "/path", "userId"));

        Mockito.verify(fileRepo, Mockito.times(1)).save(Mockito.any());
    }

    private MockMultipartFile createMockMultipartFile() {
        return new MockMultipartFile("file", "test.txt", MediaType.TEXT_PLAIN_VALUE, "Test Content".getBytes());
    }

    @Test
    void getFilesByName() {
        String fileName = "dummy.pdf";
        File file = new File();
        file.setName(fileName);
        Mockito.when(fileRepo.findByName(fileName)).thenReturn(List.of(file));

        List<File> result = fileService.getFilesByName(fileName);

        assertNotNull(result);
        Assertions.assertEquals(1, result.size());
        Assertions.assertEquals(fileName, result.get(0).getName());
    }

    @Test
    void getFilesByNameWithException() {
        Mockito.when(fileRepo.findByName(Mockito.anyString()))
                .thenThrow(new RuntimeException("Simulated database error"));
        Assertions.assertThrows(FileNotFoundException.class, () -> fileService.getFilesByName("test"));
        Mockito.verify(fileRepo, Mockito.times(1)).findByName(Mockito.anyString());
    }

    @Test
    void getFileById() {
        String fileId = "0844a291-9728-4a3f-aefd-bfc14651a280";
        File file = new File();
        file.setId(fileId);
        Mockito.when(fileRepo.findById(fileId)).thenReturn(Optional.of(file));

        File result = fileService.getFileById(fileId);

        assertNotNull(result);
        Assertions.assertEquals(fileId, result.getId());
    }

    @Test
    void updateFile() {
        MultipartFile updateRequestBody = createMockMultipart("TestFile.pdf", "Test content");
        String fileId = "0844a291-9728-4a3f-aefd-bfc14651a280";
        File file = new File();
        file.setId(fileId);
        file.setName("dummy.pdf");
        file.setFileType("PDF");
        file.setPath("../path");
        file.setUserId("1");
        file.setContent("Base64String".getBytes());

        Mockito.when(fileRepo.findById(fileId)).thenReturn(Optional.of(file));
        Mockito.when(fileRepo.save(Mockito.any(File.class))).thenReturn(file);

        File result = fileService.updateFile(fileId, updateRequestBody, "1");

        assertNotNull(result);
    }

    @Test
    void updateFileException() {
        // Your test code
        String fileId = "nonexistent-file-id";
        MultipartFile updateRequestBody = createMockMultipart("TestFile.pdf", "Test content");
        Mockito.when(fileRepo.findById(fileId)).thenReturn(Optional.empty());
        Assertions.assertThrows(FileNotFoundException.class,
                () -> fileService.updateFile(fileId, updateRequestBody, "1"));
        Mockito.verify(fileRepo, Mockito.times(1)).findById(fileId);
        Mockito.verify(fileRepo, Mockito.times(0)).save(Mockito.any());
    }

    @Test
    void getAllOrByName() {
        String fileName = "dummy.pdf";
        File file = new File();
        file.setId("0844a291-9728-4a3f-aefd-bfc14651a280");
        file.setName(fileName);
        file.setFileType("PDF");
        file.setPath("../path");
        file.setUserId("1");
        file.setContent("Base64String".getBytes());

        Mockito.when(fileRepo.findAll()).thenReturn(List.of(file));
        Mockito.when(fileRepo.findByName(fileName)).thenReturn(List.of(file));

        List<File> resultWithName = fileService.getAllOrByName(fileName);
        assertNotNull(resultWithName);
        Assertions.assertEquals(1, resultWithName.size());
        Assertions.assertEquals(fileName, resultWithName.get(0).getName());

        List<File> resultWithoutName = fileService.getAllOrByName(null);
        assertNotNull(resultWithoutName);
        Assertions.assertEquals(1, resultWithoutName.size());
        Assertions.assertEquals(fileName, resultWithoutName.get(0).getName());
    }

    private MultipartFile createMockMultipart(String fileName, String content) {
        try {
            return new MockMultipartFile(fileName, fileName, "application/pdf", content.getBytes());
        } catch (Exception e) {
            throw new RuntimeException("Error creating mock Multipart File", e);
        }
    }

}