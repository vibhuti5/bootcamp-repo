package com.checkr.candidate.dto;

import com.checkr.candidate.enums.AdverseActionStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdverseActionPostDto {
    private AdverseActionStatus status;
    private String preNoticeDate;
    private String postNoticeDate;
}
