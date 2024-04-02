package com.bootcamp.contiq.notificationservice.service;

import com.bootcamp.contiq.notificationservice.dto.NotificationDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationGetDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationPostDto;

import java.util.List;

public interface NotificationService {
    List<NotificationGetDto> getAllNotifications();
    NotificationDto createNotification(NotificationPostDto notificationDto);
}
