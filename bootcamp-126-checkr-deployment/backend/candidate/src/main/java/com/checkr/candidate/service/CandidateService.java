package com.checkr.candidate.service;

import com.checkr.candidate.dto.*;

import java.util.List;

import com.checkr.candidate.dto.CandidateCourtSearchDto;


public interface CandidateService {
    ReportInfoDto getCandidateReportInfoById(Integer id);
    CandidateInfoDto getCandidateInfoById(Integer id);
    List<CandidateTableDto> getAllCandidates();
    ResponseDto updateCandidateById(CandidateUpdateDto candidateDto, Integer id);
  List<CandidateCourtSearchDto> getCandidateCourtSearchesByCandidateId(int id);
}
