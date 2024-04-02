package com.bootcamp.contiq.fileservice.controller;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import com.bootcamp.contiq.fileservice.service.impl.ElasticSearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/files")
public class ElasticSearchController {
    @Autowired
    private ElasticSearchServiceImpl elasticSearchService;

    @PostMapping("/upload")
    public ResponseEntity<?> fileUpload(
            @RequestParam("file") MultipartFile file,
            @RequestParam("userId") String userId)  {
        String fileId = elasticSearchService.uploadFile(file,userId,userId);
        return new ResponseEntity<>(fileId, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ElasticSearchDTO>> searchForFile(@RequestParam String searchTerm)  {
        return ResponseEntity.ok(elasticSearchService.findBySearchTerm(searchTerm));
    }
}
