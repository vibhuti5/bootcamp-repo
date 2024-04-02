package com.checkr.apigateway.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Constants {
    public static final String Login = "/api/users/login";
    public static final String Signup = "/api/users/signup";
    public static final List<String> OpenEndpoints = Arrays.asList(Login,Signup);
    public static final String AuthHeaderMissing="Authorization header is missing or malformed";
    public static final String InvalidAuthHeader="Invalid Authorization";

}
