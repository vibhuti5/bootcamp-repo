package com.checkr.candidate.enums;

public enum AdjudicationStatus {
    ENGAGE("ENGAGE"),
    NONE("-"),
    ADVERSE_ACTION("ADVERSE ACTION");

    private String displayName;

    AdjudicationStatus(String displayName) {
        this.displayName = displayName;
    }

    public String displayName() { return displayName; }
}
