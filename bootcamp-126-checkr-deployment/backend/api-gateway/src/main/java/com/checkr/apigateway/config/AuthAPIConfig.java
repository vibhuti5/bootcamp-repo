package com.checkr.apigateway.config;
import com.auth0.client.auth.AuthAPI;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AuthAPIConfig {

    @Value("${clientId}")
    private String clientId;

    @Value("${clientSecret}")
    private String clientSecret;

    @Value("${domain}")
    private String domain;

    @Bean
    public AuthAPI authAPI() {
        return new AuthAPI(domain, clientId, clientSecret);
    }
}

