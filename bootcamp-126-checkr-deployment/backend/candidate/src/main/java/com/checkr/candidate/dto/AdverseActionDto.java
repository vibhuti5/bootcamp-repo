package com.checkr.candidate.dto;


import com.checkr.candidate.enums.AdverseActionStatus;
import com.checkr.candidate.types.AdverseActions;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdverseActionDto {
    private int id;
    private String name;
    @Enumerated(EnumType.STRING)
    private AdverseActionStatus status;
    private String preNoticeDate;
    private String postNoticeDate;
    private static ModelMapper modelMapper;
    static {
        modelMapper=new ModelMapper();
    }
    public static AdverseActionDto convertAdverseActionToDto(AdverseActions adverseActions){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(adverseActions,AdverseActionDto.class);
    }
}
