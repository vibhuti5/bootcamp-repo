package com.bootcamp.contiq.fileservice.controller;

import com.bootcamp.contiq.fileservice.entity.File;
import com.bootcamp.contiq.fileservice.service.FileService;
import com.bootcamp.contiq.fileservice.utils.AppConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(AppConstants.BASE_URL)
public class FileController {

    private final FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<File> getFileById(@PathVariable String id) {
        return ResponseEntity.ok(fileService.getFileById(id));
    }

    @GetMapping()
    public ResponseEntity<List<File>> getAllFiles(@RequestParam(name = "name", required = false) String fileName) {
        return ResponseEntity.ok(fileService.getAllOrByName(fileName));
    }

    @PostMapping()
    public ResponseEntity<File> uploadFile(@RequestParam(name = "files") MultipartFile file,
            @RequestParam(name = "userId") String userId,
            @RequestParam(name = "path") String path) {
        return new ResponseEntity<>(fileService.createFile(file, path, userId), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<File> updateFile(
            @PathVariable String id,
            @RequestParam(name = "files") MultipartFile file,
            @RequestParam(name = "userId") String userId) {
        return ResponseEntity.ok(fileService.updateFile(id, file,userId));
    }

}
