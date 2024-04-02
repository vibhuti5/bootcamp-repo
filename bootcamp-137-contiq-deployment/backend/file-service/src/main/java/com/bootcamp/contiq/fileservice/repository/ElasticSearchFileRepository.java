package com.bootcamp.contiq.fileservice.repository;

import com.bootcamp.contiq.fileservice.entity.ElasticSearch;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface ElasticSearchFileRepository extends ElasticsearchRepository<ElasticSearch, String> {
    List<ElasticSearch> findAllByContent(String keyword);
}
