package com.bootcamp.contiq.fileservice.service.impl;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import com.bootcamp.contiq.fileservice.entity.ElasticSearch;
import com.bootcamp.contiq.fileservice.exception.ElasticSearchException;
import com.bootcamp.contiq.fileservice.repository.ElasticSearchFileRepository;
import com.bootcamp.contiq.fileservice.service.ElasticSearchService;
import com.bootcamp.contiq.fileservice.util.ElasticSearchMapper;
import com.bootcamp.contiq.fileservice.util.Helper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Service
public class ElasticSearchServiceImpl implements ElasticSearchService {
    private static final Logger logger = LoggerFactory.getLogger(ElasticSearchServiceImpl.class);
    @Autowired
    private ElasticSearchFileRepository elasticSearchFileRepository;
    @Autowired
    private ElasticSearchMapper elasticSearchMapper;
    @Autowired
    private Helper pdfHelper;
    @Override
    public ElasticSearchDTO saveFile(ElasticSearchDTO fileDTO) {
        try {
            ElasticSearch file = elasticSearchMapper.mapFileDtoToElasticFile(fileDTO);
            elasticSearchFileRepository.save(file);
            return fileDTO;
        } catch (Exception e) {
            String errorMessage = e.getMessage();
            logger.error(errorMessage);
            throw new ElasticSearchException(errorMessage);
        }
    }

    @Override
    public String uploadFile(MultipartFile file,String userId,String fileId) {
        try {
            String fileName = Objects.requireNonNull(file.getOriginalFilename());
            byte[] pdfData = file.getBytes();
            String content = pdfHelper.extractTextFromPDF(pdfData);
            ElasticSearchDTO esFile = new ElasticSearchDTO();
            esFile.setFileName(fileName);
            esFile.setCreatedAt(new Date());
            esFile.setUserId(userId);
            esFile.setContent(content);
            esFile.setFileId(fileId);
            ElasticSearchDTO savedFile = saveFile(esFile);
            return savedFile.getId();
        } catch (Exception e) {
            String errorMessage = e.getMessage();
            logger.error(errorMessage);
            throw new ElasticSearchException(errorMessage);
        }
    }

    @Override
    public List<ElasticSearchDTO> findBySearchTerm(String searchTerm) {
        try {
            List<ElasticSearch> matchingDocuments = elasticSearchFileRepository.findAllByContent(searchTerm);
            if (matchingDocuments.isEmpty()) {
                return Collections.emptyList();
            }
            return matchingDocuments.stream()
                    .map(elasticSearchMapper::convertElasticFileToDto)
                    .toList();
        } catch (Exception e) {
            String errorMessage = e.getMessage();
            logger.error(errorMessage);
            throw new ElasticSearchException(errorMessage);
        }
    }
}
