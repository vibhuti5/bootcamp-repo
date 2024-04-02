package com.bootcamp.contiq.user.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class PasswordSecurityUtil {
    private static final String PATTERN = "((?=.*[a-z])(?=.*\\d)(?=.*[A-Z]).{6,12})";

    private final Pattern userPasswordPattern = Pattern.compile(PATTERN);

    public boolean validateUserPassword(String password) {
        Matcher matcher = userPasswordPattern.matcher(password);
        return matcher.matches();
    }

    public String encodePassword(String password){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.encode(password);
    }
    public boolean matchPassword(String password, String encodedPassword){
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(password, encodedPassword);
    }

}
