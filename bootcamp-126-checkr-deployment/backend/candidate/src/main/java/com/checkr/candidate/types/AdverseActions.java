package com.checkr.candidate.types;

import com.checkr.candidate.enums.AdverseActionStatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdverseActions  {
    @Enumerated(EnumType.STRING)
    private AdverseActionStatus status;
    private String pre_notice_date;
    private String post_notice_date;
    private String created_at;
    private String updated_at;
}
