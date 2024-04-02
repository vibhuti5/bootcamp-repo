package com.checkr.apigateway.filter;
import com.auth0.client.auth.AuthAPI;
import com.auth0.json.auth.UserInfo;
import com.auth0.net.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

import static com.checkr.apigateway.utils.Constants.*;

@Component
public class Auth0AuthenticationFilter extends AbstractGatewayFilterFactory<Auth0AuthenticationFilter.Config> {

    private final AuthAPI authAPI;
    private final List<String> openEndpoints = OpenEndpoints;
    @Autowired
    private CacheManager cacheManager;


    @Autowired
    public Auth0AuthenticationFilter(AuthAPI authAPI) {
        super(Config.class);
        this.authAPI = authAPI;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
            String requestURI = exchange.getRequest().getURI().getPath();

            if (isOpenEndpoint(requestURI)) {
                return chain.filter(exchange);
            }
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return sendUnauthorizedResponse(exchange, AuthHeaderMissing);
            }
            String token = authHeader.substring(7);

            Cache cache = cacheManager.getCache("authenticationCache");
            String cachedUserInfo = cache.get(requestURI, String.class);
            String cachedToken = cache.get("token", String.class);

            if (cachedToken != null && cachedToken.equals(token)){
                System.out.println("cached token");
                exchange.getRequest().mutate().header("user-info", cachedUserInfo);
                return chain.filter(exchange);
            }

            try {
                Response<UserInfo> userInfo = authAPI.userInfo(token).execute();
                String userInfoString = userInfo.toString();

                cache.put("token", token);
                cache.put(requestURI, userInfoString);
                exchange.getRequest().mutate().header("user-info", userInfoString);
                return chain.filter(exchange);
            } catch (Exception e) {
                System.out.println("exception: " + e);
                return sendUnauthorizedResponse(exchange, e.getMessage());
            }
        };
    }

    private Mono<Void> sendUnauthorizedResponse(ServerWebExchange exchange, String message) {
        exchange.getResponse().getHeaders().add(HttpHeaders.CONTENT_TYPE, "application/json");
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);

        String errorMessage = "{\"error\":\"" + message + "\"}";
        return exchange.getResponse().writeWith(Mono.just(exchange.getResponse().bufferFactory().wrap(errorMessage.getBytes())));
    }

    public static class Config {
    }
    private boolean isOpenEndpoint(String requestURI) {
        return openEndpoints.contains(requestURI);
    }
}
