package com.checkr.candidate.controller;

import com.checkr.candidate.dto.*;
import com.checkr.candidate.service.CandidateService;
import com.checkr.candidate.dto.CandidateCourtSearchDto;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/candidates")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @GetMapping("/info")
    public ResponseEntity<List<CandidateTableDto>> getAllCandidates() {
        return new ResponseEntity<>(this.candidateService.getAllCandidates(), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<CandidateInfoDto> getCandidateInfoById(@RequestParam Integer id) {
        CandidateInfoDto candidateDto = this.candidateService.getCandidateInfoById(id);
        return new ResponseEntity<>(candidateDto, HttpStatus.OK);
    }

    @GetMapping("/reports")
    public ResponseEntity<ReportInfoDto> getCandidateReportInfoById(@RequestParam Integer id) {
        ReportInfoDto candidateDto = this.candidateService.getCandidateReportInfoById(id);
        return new ResponseEntity<>(candidateDto, HttpStatus.OK);
    }

    @PatchMapping("/info/{id}")
    public ResponseEntity<ResponseDto> updateCandidateById(@RequestBody CandidateUpdateDto candidateDto, @PathVariable Integer id) {
        ResponseDto updatedCandidate = this.candidateService.updateCandidateById(candidateDto,id);
        return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
    }


    @GetMapping("/candidate-court-searches/{id}")
    public  ResponseEntity<List<CandidateCourtSearchDto>> getCandidateCourtSearchByCandidateId(@PathVariable int id) {
        try{
            List<CandidateCourtSearchDto> candidateCourtSearchDtos=candidateService.getCandidateCourtSearchesByCandidateId(id);
            return ResponseEntity.ok(candidateCourtSearchDtos);
        }
        catch (Exception e) {
            throw new RecordNotFoundException("Error fetching adverse actions"+e);
        }
    }
}
