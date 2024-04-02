package com.bootcamp.contiq.fileservice.controller;

import java.util.Arrays;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.bootcamp.contiq.fileservice.dto.FileUpdateRequestBody;
import com.bootcamp.contiq.fileservice.entity.File;
import com.bootcamp.contiq.fileservice.service.FileService;
import com.bootcamp.contiq.fileservice.utils.AppConstants;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


class FileControllerTest {
    private MockMvc mockMvc;

    @InjectMocks
    private FileController fileController;

    @Mock
    private FileService fileService;

    {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(fileController).build();
    }

    @Test
    void getFileById() throws Exception {
        // Your test code
        String fileId = "0844a291-9728-4a3f-aefd-bfc14651a280";
        File expectedFile = new File();
        expectedFile.setId(fileId);

        Mockito.when(fileService.getFileById(fileId)).thenReturn(expectedFile);

        mockMvc.perform(MockMvcRequestBuilders.get(AppConstants.BASE_URL + "/{id}", fileId))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(fileId)));

        Mockito.verify(fileService, Mockito.times(1)).getFileById(fileId);
    }

    @Test
    void getAllFiles() throws Exception {
        // Your test code
        List<File> expectedFiles = Arrays.asList(new File(), new File());
        Mockito.when(fileService.getAllOrByName(null)).thenReturn(expectedFiles);
        mockMvc.perform(MockMvcRequestBuilders.get(AppConstants.BASE_URL)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(expectedFiles.size())));

        Mockito.verify(fileService, Mockito.times(1)).getAllOrByName(null);
    }

    @Test
    void uploadFile() throws Exception {
        // Your test code
        MockMultipartFile file = new MockMultipartFile("files", "test.pdf", MediaType.APPLICATION_PDF_VALUE,
                "Test Content".getBytes());
        String userId = "1";
        String path = "/uploads";

        File expectedFile = new File();
        expectedFile.setId("0844a291-9728-4a3f-aefd-bfc14651a280");
        expectedFile.setName("test.pdf");
        expectedFile.setUserId(userId);
        expectedFile.setPath(path);

        Mockito.when(fileService.createFile(Mockito.any(), Mockito.any(), Mockito.any())).thenReturn(expectedFile);

        mockMvc.perform(MockMvcRequestBuilders.multipart(AppConstants.BASE_URL)
                        .file(file)
                        .param("userId", userId)
                        .param("path", path)
                        .contentType(MediaType.MULTIPART_FORM_DATA))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id", Matchers.is(expectedFile.getId())));

        Mockito.verify(fileService, Mockito.times(1)).createFile(Mockito.any(), Mockito.any(), Mockito.any());
    }

    @Test
    void updateFile() throws Exception {
        // Your test code
        String fileId = "0844a291-9728-4a3f-aefd-bfc14651a280";
        String content = "Updated Content";

        FileUpdateRequestBody requestBody = new FileUpdateRequestBody();
        requestBody.setContent(content);

        File updatedFile = new File();
        updatedFile.setId(fileId);
        updatedFile.setName("test.pdf");
        updatedFile.setUserId("1");
        updatedFile.setPath("/uploads");

        // Mocking any parameters in the updateFile method
        Mockito.when(fileService.updateFile(Mockito.anyString(), Mockito.any(), Mockito.anyString()))
                .thenReturn(updatedFile);

        mockMvc.perform(MockMvcRequestBuilders.multipart(AppConstants.BASE_URL + "/{id}", fileId)
                        .file(new MockMultipartFile("files", "test.pdf", MediaType.APPLICATION_PDF_VALUE, "Test Content".getBytes()))
                        .param("userId", "1")
                        .content("{\"content\":\"" + content + "\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is4xxClientError());
    }
}