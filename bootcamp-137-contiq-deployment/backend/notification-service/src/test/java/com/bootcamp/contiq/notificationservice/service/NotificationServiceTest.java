package com.bootcamp.contiq.notificationservice.service;

import com.bootcamp.contiq.notificationservice.dto.NotificationDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationGetDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationPostDto;
import com.bootcamp.contiq.notificationservice.entity.Notification;
import com.bootcamp.contiq.notificationservice.enums.NotificationType;
import com.bootcamp.contiq.notificationservice.repository.NotificationRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

class NotificationServiceTest {

    @Mock
    private NotificationRepository notificationRepository;

    @InjectMocks
    private NotificationServiceImpl notificationService;

    {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllNotifications() {
        Notification notification1 = new Notification("notification1", "Message 1", LocalDateTime.now(), LocalDateTime.now(), NotificationType.CREATED, "user1", "file1", 1);
        Notification notification2 = new Notification("notification2", "Message 2", LocalDateTime.now(), LocalDateTime.now(), NotificationType.UPDATED, "user2", "file2", 2);
        List<Notification> notifications = Arrays.asList(notification1, notification2);

        when(notificationRepository.findAll()).thenReturn(notifications);

        List<NotificationGetDto> result = notificationService.getAllNotifications();

        assertEquals(2, result.size());
        assertEquals("Message 1", result.get(0).getMessage());
        assertEquals(NotificationType.CREATED, result.get(0).getType());
        assertEquals("Message 2", result.get(1).getMessage());
        assertEquals(NotificationType.UPDATED, result.get(1).getType());

        verify(notificationRepository, times(1)).findAll();
    }

    @Test
    void createNotification() {
        NotificationPostDto notificationPostDto = new NotificationPostDto("New Message", LocalDateTime.now(), LocalDateTime.now(), NotificationType.CREATED, "user1", "file1", 1);
        Notification notification = new Notification("notification1", "New Message", LocalDateTime.now(), LocalDateTime.now(), NotificationType.CREATED, "user1", "file1", 1);

        when(notificationRepository.save(any(Notification.class))).thenReturn(notification);

        NotificationDto result = notificationService.createNotification(notificationPostDto);

        assertEquals("New Message", result.getMessage());
        assertEquals(NotificationType.CREATED, result.getType());

        verify(notificationRepository, times(1)).save(any(Notification.class));
    }
}
