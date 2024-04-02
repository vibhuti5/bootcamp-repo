package com.bootcamp.contiq.notificationservice.service;

import com.bootcamp.contiq.notificationservice.dto.NotificationDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationGetDto;
import com.bootcamp.contiq.notificationservice.dto.NotificationPostDto;
import com.bootcamp.contiq.notificationservice.entity.Notification;
import com.bootcamp.contiq.notificationservice.repository.NotificationRepository;
import com.bootcamp.contiq.notificationservice.util.Converter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(NotificationServiceImpl.class);


    @Override
    public List<NotificationGetDto> getAllNotifications() {
        LOGGER.info("Got All Notification from NotificationRepository");
        List<Notification> notifications = this.notificationRepository.findAll();
        return notifications.stream()
                .map(notification -> Converter.convertToDTO(notification, NotificationGetDto.class))
                .toList();
    }

    @Override
    public NotificationDto createNotification(NotificationPostDto notificationDto) {
        LOGGER.info("Got Notification request body");
        Notification notification = new Notification();
        notification.setCreatedAt(notificationDto.getCreatedAt());
        notification.setUpdatedAt(notificationDto.getUpdatedAt());
        notification.setFilesId(notificationDto.getFilesId());
        notification.setMessage(notificationDto.getMessage());
        notification.setUserId(notificationDto.getUserId());
        notification.setType(notificationDto.getType());
        notification.setOrganizationId(notificationDto.getOrganizationId());

        Notification savedNotification = this.notificationRepository.save(notification);
        return Converter.convertToDTO(savedNotification, NotificationDto.class);
    }
}