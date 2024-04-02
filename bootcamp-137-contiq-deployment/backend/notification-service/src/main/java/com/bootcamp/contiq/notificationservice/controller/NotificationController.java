package com.bootcamp.contiq.notificationservice.controller;

import com.bootcamp.contiq.notificationservice.dto.NotificationDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationGetDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationPostDto;
import com.bootcamp.contiq.notificationservice.service.NotificationService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    private static final Logger LOGGER = LoggerFactory.getLogger(NotificationController.class);

    @PostMapping("")
    public ResponseEntity<NotificationDto> createUser(@Valid @RequestBody NotificationPostDto notificationDto){
        NotificationDto notification = this.notificationService.createNotification(notificationDto);
        LOGGER.info("Adding Notification {}", notification);
        return new ResponseEntity<>(notification, HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<NotificationGetDto>> getAllNotifications(){
        List<NotificationGetDto> notifications = notificationService.getAllNotifications();
        LOGGER.info("Returning All Notification {}", notifications);
        return new ResponseEntity<>(notifications, HttpStatus.OK);
    }
}
