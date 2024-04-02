package com.checkr.candidate.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateFormatterUtil {
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

    public static String formatCurrentDateTime() {
        LocalDateTime currentDateTime = LocalDateTime.now();
        return currentDateTime.format(FORMATTER);
    }
}
