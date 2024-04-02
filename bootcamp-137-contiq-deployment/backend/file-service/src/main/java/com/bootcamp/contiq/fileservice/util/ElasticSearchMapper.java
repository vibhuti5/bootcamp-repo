package com.bootcamp.contiq.fileservice.util;

import com.bootcamp.contiq.fileservice.dto.ElasticSearchDTO;
import com.bootcamp.contiq.fileservice.entity.ElasticSearch;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ElasticSearchMapper {
    @Autowired
    private ModelMapper modelMapper;
    public ElasticSearch mapFileDtoToElasticFile(ElasticSearchDTO fileDTO) {

        return modelMapper.map(fileDTO, ElasticSearch.class);
    }

    public ElasticSearchDTO convertElasticFileToDto(ElasticSearch file) {
        return modelMapper.map(file, ElasticSearchDTO.class);
    }
}
