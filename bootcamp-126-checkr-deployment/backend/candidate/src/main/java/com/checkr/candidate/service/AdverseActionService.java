package com.checkr.candidate.service;

import com.checkr.candidate.dto.AdverseActionDto;
import com.checkr.candidate.dto.AdverseActionPostDto;
import com.checkr.candidate.dto.ResponseDto;

import java.util.List;

public interface AdverseActionService {
    List<AdverseActionDto> getAllAdverseActions();
    ResponseDto saveAdverseAction(AdverseActionPostDto adverseActionPostDto, int id);
}
