INSERT INTO `bc-137-contiq`.`organization` (`id`, `name`) VALUES (1, 'Example Organization');

INSERT INTO `bc-137-contiq`.`user` (
  `id`, `email`, `password`, `name`, `unread_notification_count`, `organization_id`
) VALUES (
  'e29b-41d4-a716-446655440000', 'user123@example.com', 'password123', 'John Doe', 0, 1
);

INSERT INTO `bc-137-contiq`.`files` (
  `id`, `name`, `path`, `type`, `content`, `updated_at`, `created_at`, `organization_id`,`user_id`
) VALUES (
  'f29b-41d4-a716-446655440000', 'Example File', '/path/to/file', 'application/pdf', 'File Data', NOW(), NOW(), 1,'e29b-41d4-a716-446655440000'
);

-- Inserting the first notification
INSERT INTO `bc-137-contiq`.`notification` (
  `id`, `message`, `created_at`, `updated_at`, `type`, `organization_id`, `user_id`, `files_id`
) VALUES (
  'i01b-41d4-a716-116655440000',
  'John upload expample.pdf',
  NOW(), -- Assuming you want to use the current timestamp for created_at
  NOW(), -- Assuming you want to use the current timestamp for updated_at
  'CREATED',
  1, -- Replace with the actual organization_id
  'e29b-41d4-a716-446655440000', -- Replace with the actual user_id
  'f29b-41d4-a716-446655440000'
);

