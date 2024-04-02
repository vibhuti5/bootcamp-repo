package com.checkr.candidate.controller;

import com.checkr.candidate.dto.AdverseActionDto;
import com.checkr.candidate.dto.AdverseActionPostDto;
import com.checkr.candidate.dto.ResponseDto;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.service.AdverseActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidates/adverse-actions")
public class AdverseActionController {

    @Autowired
    private AdverseActionService adverseActionService;


    @GetMapping()
    public ResponseEntity<List<AdverseActionDto>> getAllAdverseActions(){
        try{
            List<AdverseActionDto> adverseActionDtos=adverseActionService.getAllAdverseActions();
            return ResponseEntity.ok(adverseActionDtos);
        }
        catch (Exception e) {
            throw new RecordNotFoundException("Error fetching adverse actions"+e);
        }
    }
    @PutMapping("/{id}")
    public ResponseDto saveAdverseAction(@RequestBody AdverseActionPostDto adverseActionPostDto, @PathVariable int id) {
        return adverseActionService.saveAdverseAction(adverseActionPostDto,id);
    }
}
