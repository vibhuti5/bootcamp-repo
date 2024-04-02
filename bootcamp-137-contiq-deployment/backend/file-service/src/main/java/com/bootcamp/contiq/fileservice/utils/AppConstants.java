package com.bootcamp.contiq.fileservice.utils;

public class AppConstants {

    private AppConstants() {

    }

    public static final String BASE_URL = "/files";
    public static final String ID = "id";
    public static final String NAME = "name";
    public static final String FILE_TYPE = "type";
    public static final String CONTENT = "content";
    public static final String PATH = "path";
    public static final String CREATED_AT = "created_at";
    public static final String UPDATED_AT = "updated_at";

    public static final String ALL_FILES_FOUND_LOG_MESSAGE="trying to fetch all files";
    public static final String FILE_NOT_FOUND_LOG_MESSAGE="unable to fetch all the files";
    public static final String FILE_NOT_FOUND_ERROR_MESSAGE="An error occurred while fetching all the files";
    public static final String USER_ID="user_id";
    public static final String FILES_CREATED="trying to crete file";
    public static final String FILE_CREATION_ERROR="error occurred during file creation";

}
