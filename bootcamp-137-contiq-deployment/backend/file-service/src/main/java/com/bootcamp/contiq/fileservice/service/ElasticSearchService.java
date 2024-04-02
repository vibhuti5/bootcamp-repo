package com.bootcamp.contiq.fileservice.service;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ElasticSearchService {
    public String uploadFile(MultipartFile file,String userId,String fileId);
    
    public ElasticSearchDTO saveFile(ElasticSearchDTO fileDTO);

    public List<ElasticSearchDTO> findBySearchTerm(String query);
}
