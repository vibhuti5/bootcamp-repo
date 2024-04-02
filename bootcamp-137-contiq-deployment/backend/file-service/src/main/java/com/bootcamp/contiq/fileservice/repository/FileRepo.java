package com.bootcamp.contiq.fileservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bootcamp.contiq.fileservice.entity.File;

@Repository
public interface FileRepo extends JpaRepository<File, String> {

    List<File> findByName(String fileName);
}
