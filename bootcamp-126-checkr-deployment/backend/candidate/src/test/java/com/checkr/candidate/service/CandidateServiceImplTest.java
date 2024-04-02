package com.checkr.candidate.service;

import com.checkr.candidate.dto.*;
import com.checkr.candidate.entity.Candidate;
import com.checkr.candidate.entity.CandidateCourtSearch;
import com.checkr.candidate.entity.CourtSearch;
import com.checkr.candidate.enums.AdjudicationStatus;
import com.checkr.candidate.enums.CandidateCourtSearchStatus;
import com.checkr.candidate.exceptions.RecordNotFoundException;
import com.checkr.candidate.repositary.CandidateCourtSearchRepository;
import com.checkr.candidate.repositary.CandidateRepository;
import com.checkr.candidate.types.Report;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.stubbing.Answer;

import java.math.BigInteger;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CandidateServiceImplTest {
    @Mock
    private CandidateRepository candidateRepository;
    @Mock
    private CandidateCourtSearchRepository candidateCourtSearchRepository;

    @InjectMocks
    private CandidateServiceImpl candidateService;

    {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllCandidates() {
        List<Candidate> candidateList = new ArrayList<>();
        Candidate candidate1 = new Candidate();
        candidate1.setId(1);
        candidate1.setName("John");
        Report report1 = new Report();
        report1.setAdjudication(AdjudicationStatus.ENGAGE);
        candidate1.setReport(report1);
        candidateList.add(candidate1);

        Candidate candidate2 = new Candidate();
        candidate2.setId(2);
        candidate2.setName("Jane");
        Report report2 = new Report();
        report2.setAdjudication(AdjudicationStatus.ADVERSE_ACTION);
        candidate2.setReport(report2);
        candidateList.add(candidate2);

        when(candidateRepository.findAll()).thenReturn(candidateList);

        List<CandidateTableDto> result = candidateService.getAllCandidates();

        assertEquals(2, result.size());
        assertEquals("John", result.get(0).getName());
        assertEquals("ENGAGE", result.get(0).getAdjudication());
        assertEquals("Jane", result.get(1).getName());
        assertEquals("ADVERSE ACTION", result.get(1).getAdjudication());
    }

    @Test
    void testGetCandidateInfoById() {
        Candidate sampleCandidate = new Candidate();
        sampleCandidate.setId(1);
        sampleCandidate.setName("John");
        sampleCandidate.setEmail("john@example.com");
        sampleCandidate.setDob(new Date());
        sampleCandidate.setAge(30);
        sampleCandidate.setPhone(new BigInteger("1234567890"));
        sampleCandidate.setZipcode("12345");
        sampleCandidate.setSocialSecurity("123-45-6789");
        sampleCandidate.setDriverLicense("DL12345");

        when(candidateRepository.findById(1)).thenReturn(Optional.of(sampleCandidate));

        CandidateInfoDto result = candidateService.getCandidateInfoById(1);

        assertNotNull(result);
        assertEquals(1, result.getId());
        assertEquals("John", result.getName());
        assertEquals("john@example.com", result.getEmail());

        // Test when the candidate is not found
        when(candidateRepository.findById(2)).thenReturn(Optional.empty());
        assertThrows(RecordNotFoundException.class, () -> candidateService.getCandidateInfoById(2));
    }

    @Test
    void testGetCandidateReportInfoById() {
        Candidate sampleCandidate = new Candidate();
        sampleCandidate.setId(1);
        Report sampleReport = new Report();
        sampleReport.setAdjudication(AdjudicationStatus.ENGAGE);
        sampleCandidate.setReport(sampleReport);

        when(candidateRepository.findById(1)).thenReturn(Optional.of(sampleCandidate));

        ReportInfoDto result = candidateService.getCandidateReportInfoById(1);

        assertNotNull(result);
        assertEquals(1, result.getId());
        assertEquals("ENGAGE", result.getAdjudication());

        // Test when the candidate is not found
        when(candidateRepository.findById(2)).thenReturn(Optional.empty());
        assertThrows(RecordNotFoundException.class, () -> candidateService.getCandidateReportInfoById(2));
    }

    @Test
    void testUpdateCandidateById() {
        Candidate sampleCandidate = new Candidate();
        sampleCandidate.setId(1);
        Report sampleReport = new Report();
        sampleReport.setPackages("Package1");
        sampleReport.setCompleted_date("2023-10-30");
        sampleReport.setAdjudication(AdjudicationStatus.NONE);
        sampleCandidate.setReport(sampleReport);

        when(candidateRepository.findById(1)).thenReturn(Optional.of(sampleCandidate));
        when(candidateRepository.save(any(Candidate.class))).thenAnswer((Answer<Candidate>) invocation -> invocation.getArgument(0));

        CandidateUpdateDto updateDto = new CandidateUpdateDto();
        updateDto.setStatus(CandidateCourtSearchStatus.CLEAR);
        updateDto.setAdjudication(AdjudicationStatus.ENGAGE);

        ResponseDto result = candidateService.updateCandidateById(updateDto, 1);

        assertNotNull(result);
        assertEquals("Candidate data updated successfully", result.getMessage());
        assertEquals(CandidateCourtSearchStatus.CLEAR, sampleCandidate.getReport().getStatus());
        assertEquals(AdjudicationStatus.ENGAGE, sampleCandidate.getReport().getAdjudication());

        // Test when the candidate is not found
        assertThrows(RecordNotFoundException.class, () -> candidateService.updateCandidateById(updateDto, 2));
    }

    @Test
    void testGetCandidateCourtSearchesByCandidateId() {
        int candidateId = 1;
        CourtSearch courtSearch1 = new CourtSearch();
        courtSearch1.setId(101);
        courtSearch1.setName("SearchName1");
        CandidateCourtSearch search1 = new CandidateCourtSearch();
        CandidateCourtSearchStatus status=CandidateCourtSearchStatus.CLEAR;
        search1.setId(1);
        search1.setStatus(status);
        search1.setCourtSearch(courtSearch1);
        CourtSearch courtSearch2 = new CourtSearch();
        courtSearch2.setId(102);
        courtSearch2.setName("SearchName2");
        CandidateCourtSearch search2 = new CandidateCourtSearch();
        search2.setId(2);
        search2.setStatus(status);
        search2.setCourtSearch(courtSearch2);
        List<CandidateCourtSearch> searchList = Arrays.asList(search1, search2);
        when(candidateCourtSearchRepository.getCandidateCourtSearchesByCandidateId(candidateId))
                .thenReturn(searchList);
        List<CandidateCourtSearchDto> dtos = candidateService.getCandidateCourtSearchesByCandidateId(candidateId);
        Assertions.assertEquals(2, dtos.size());
    }
}

