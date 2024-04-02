package com.bootcamp.contiq.fileservice.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.bootcamp.contiq.fileservice.entity.File;
import com.bootcamp.contiq.fileservice.exception.FileCreationException;
import com.bootcamp.contiq.fileservice.exception.FileNotFoundException;
import com.bootcamp.contiq.fileservice.repository.FileRepo;
import com.bootcamp.contiq.fileservice.service.FileService;
import com.bootcamp.contiq.fileservice.utils.AppConstants;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileServiceImpl implements FileService {

    private final FileRepo fileRepo;
    private final ElasticSearchServiceImpl elasticSearchService;

    public FileServiceImpl(FileRepo fileRepo, ElasticSearchServiceImpl elasticSearchService) {
        this.fileRepo = fileRepo;
        this.elasticSearchService = elasticSearchService;
    }

    @Override
    public List<File> getAllFiles() {

        try {
            log.info(AppConstants.ALL_FILES_FOUND_LOG_MESSAGE);
            return fileRepo.findAll();
        } catch (Exception e) {
            log.error(AppConstants.FILE_NOT_FOUND_LOG_MESSAGE);
            throw new FileNotFoundException(AppConstants.FILE_NOT_FOUND_ERROR_MESSAGE);
        }
    }

    @Override
    public File createFile(MultipartFile selectedFile, String path, String userId) {
        try {
            log.info(AppConstants.FILES_CREATED);
            File file = new File();
            file.setName(selectedFile.getOriginalFilename());
            file.setFileType(selectedFile.getContentType());
            file.setContent(selectedFile.getBytes());
            file.setCreatedAt(new Date());
            file.setUpdatedAt(new Date());
            file.setPath(path);
            file.setUserId(userId);
            file.setOrganizationId(1);
            File savedFile = fileRepo.save(file);
            elasticSearchService.uploadFile(selectedFile, userId, savedFile.getId());
            return savedFile;
        } catch (Exception e) {
            log.error(AppConstants.FILE_CREATION_ERROR);
            throw new FileCreationException(AppConstants.FILE_CREATION_ERROR);
        }
    }

    @Override
    public List<File> getFilesByName(String fileName) {
        try {
            log.info("Finding files by name: {}", fileName);
            return fileRepo.findByName(fileName);
        } catch (Exception e) {
            log.error("Error finding files by name: {}", fileName, e);
            throw new FileNotFoundException("Error finding files by name");
        }
    }

    @Override
    public File getFileById(String id) {
        return fileRepo.findById(id).orElseThrow(() -> new FileNotFoundException("file not found for Id:" + id));
    }

    @Override
    public File updateFile(String id, MultipartFile updatedFile, String userId) {
        try {
            File file = getFileById(id);
            log.info(file.getName());
            file.setContent(updatedFile.getBytes());
            file.setUpdatedAt(new Date());
            file.setUserId(userId);
            fileRepo.save(file);
            return file;
        } catch (Exception e) {
            log.error("Error finding files by id: {}", id, e);
            throw new FileNotFoundException("Error finding files by name");
        }

    }

    @Override
    public List<File> getAllOrByName(String fileName) {
        if (fileName != null && !fileName.isEmpty()) {
            return getFilesByName(fileName);
        } else {
            return getAllFiles();
        }
    }
}
