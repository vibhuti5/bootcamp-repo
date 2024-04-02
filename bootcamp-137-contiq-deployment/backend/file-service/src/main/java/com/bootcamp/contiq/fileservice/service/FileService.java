package com.bootcamp.contiq.fileservice.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.bootcamp.contiq.fileservice.entity.File;

public interface FileService {
    List<File> getAllFiles();

    File createFile(MultipartFile selectedFile, String path, String userId);

    List<File> getFilesByName(String fileName);

    File getFileById(String id);

    File updateFile(String id, MultipartFile file, String userId);

    List<File> getAllOrByName(String fileName);
}
