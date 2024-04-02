package com.bootcamp.contiq.notificationservice.controller;

import com.bootcamp.contiq.notificationservice.dto.NotificationDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationGetDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationPostDto;
import com.bootcamp.contiq.notificationservice.enums.NotificationType;
import com.bootcamp.contiq.notificationservice.service.NotificationService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

class NotificationControllerTest {
    @InjectMocks
    private NotificationController notificationController;

    @Mock
    private NotificationService notificationService;

    {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateNotification() {
        NotificationPostDto postDto = new NotificationPostDto(
                "Test Message",
                LocalDateTime.now(),
                LocalDateTime.now(),
                NotificationType.CREATED,
                "e29b-41d4-a716-446655440000",
                "f29b-41d4-a716-446655440000",
                1
        );

        NotificationDto responseDto = new NotificationDto(
                "notification1",
                "Test Message",
                LocalDateTime.now(),
                LocalDateTime.now(),
                NotificationType.CREATED,
                "e29b-41d4-a716-446655440000",
                "f29b-41d4-a716-446655440000",
                1
        );

        when(notificationService.createNotification(postDto)).thenReturn(responseDto);

        ResponseEntity<NotificationDto> response = notificationController.createUser(postDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(responseDto, response.getBody());
    }

    @Test
    void testGetAllNotifications() {
        List<NotificationGetDto> expectedDtos = new ArrayList<>();
        expectedDtos.add(new NotificationGetDto("notification1", "Test Message", LocalDateTime.now(), LocalDateTime.now(), NotificationType.CREATED));

        when(notificationService.getAllNotifications()).thenReturn(expectedDtos);

        ResponseEntity<List<NotificationGetDto>> response = notificationController.getAllNotifications();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedDtos, response.getBody());
    }
}
