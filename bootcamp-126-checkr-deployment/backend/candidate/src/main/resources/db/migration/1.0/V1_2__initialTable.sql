INSERT INTO `checkr`.`candidates` (
    `name`,
    `email`,
    `dob`,
    `age`,
    `location`,
    `phone`,
    `zipcode`,
    `social_security`,
    `driver_license`,
    `created_at`,
    `updated_at`,
    `adverse_actions`,
    `report`
) VALUES
(
    'Emily Davis',
    'emily@example.com',
    '1993-04-17',
    30,
    'Houston',
    7139876543,
    '77001',
    '713-98-7654',
    'DL97531',
    '2023-10-30T08:00:00',
    '2023-10-30T10:00:00',
    null,
    '{
        "packages": "Executive Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-10-25T14:00:00",
        "created_at": "2023-10-30T12:00:00",
        "updated_at": "2023-10-30T13:00:00"
    }'
),
(
    'Robert Miller',
    'robert@example.com',
    '1980-12-08',
    42,
    'Seattle',
    2067654321,
    '98101',
    '206-76-5432',
    'DL64208',
    '2023-10-31T14:00:00',
    '2023-10-31T16:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-10-31",
        "post_notice_date": "2023-11-01",
        "created_at": "2023-10-31T16:00:00",
        "updated_at": "2023-10-31T17:00:00"
    }',
    '{
        "packages": "Standard Check",
        "adjudication": "ADVERSE_ACTION",
        "status": "CONSIDER",
        "completed_date": "2023-10-31T18:00:00",
        "created_at": "2023-10-31T19:00:00",
        "updated_at": "2023-10-31T20:00:00"
    }'
),
(
    'Jennifer Smith',
    'jennifer@example.com',
    '1988-09-22',
    34,
    'Atlanta',
    4041234567,
    '30301',
    '404-12-3456',
    'DL43210',
    '2023-11-01T09:00:00',
    '2023-11-01T11:00:00',
    null,
    '{
        "packages": "Enhanced Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-01T13:00:00",
        "created_at": "2023-11-01T13:00:00",
        "updated_at": "2023-11-01T14:00:00"
    }'
),
(
    'Matthew Johnson',
    'matthew@example.com',
    '1996-03-30',
    27,
    'Denver',
    7209876543,
    '80201',
    '720-98-7654',
    'DL24680',
    '2023-11-02T10:00:00',
    '2023-11-02T12:00:00',
    null,
    '{
        "packages": "Premium Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-02T14:00:00",
        "created_at": "2023-11-02T15:00:00",
        "updated_at": "2023-11-02T16:00:00"
    }'
),
(
    'Olivia Wilson',
    'olivia@example.com',
    '1991-05-12',
    32,
    'Phoenix',
    4807654321,
    '85001',
    '480-76-5432',
    'DL13579',
    '2023-11-03T08:00:00',
    '2023-11-03T10:00:00',
    null,
    '{
        "packages": "Basic Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-03T12:00:00",
        "created_at": "2023-11-03T13:00:00",
        "updated_at": "2023-11-03T14:00:00"
    }'
),
(
    'William Davis',
    'william@example.com',
    '1984-07-08',
    39,
    'San Diego',
    8581234567,
    '92101',
    '858-12-3456',
    'DL64208',
    '2023-11-04T14:00:00',
    '2023-11-04T16:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-11-04",
        "post_notice_date": "2023-11-05",
        "created_at": "2023-11-04T16:00:00",
        "updated_at": "2023-11-04T17:00:00"
    }',
    '{
        "packages": "Standard Check",
        "adjudication": "ADVERSE_ACTION",
        "status": "CONSIDER",
        "completed_date": "2023-11-04T18:00:00",
        "created_at": "2023-11-04T19:00:00",
        "updated_at": "2023-11-04T20:00:00"
    }'
),
(
    'Ava Smith',
    'ava@example.com',
    '1990-02-14',
    33,
    'Austin',
    5129876543,
    '73301',
    '512-98-7654',
    'DL97531',
    '2023-11-05T09:00:00',
    '2023-11-05T11:00:00',
    null,
    '{
        "packages": "Enhanced Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-05T13:00:00",
        "created_at": "2023-11-05T13:00:00",
        "updated_at": "2023-11-05T14:00:00"
    }'
),
(
    'Daniel Johnson',
    'daniel@example.com',
    '1983-11-28',
    39,
    'Las Vegas',
    7027654321,
    '89101',
    '702-76-5432',
    'DL24680',
    '2023-11-06T10:00:00',
    '2023-11-06T12:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-11-06",
        "post_notice_date": "2023-11-07",
        "created_at": "2023-11-06T12:00:00",
        "updated_at": "2023-11-06T13:00:00"
    }',
    '{
        "packages": "Premium Check",
        "adjudication": "ENGAGE",
        "status": "CLEAR",
        "completed_date": "2023-11-06T14:00:00",
        "created_at": "2023-11-06T15:00:00",
        "updated_at": "2023-11-06T16:00:00"
    }'
),
(
    'Sophia Wilson',
    'sophia@example.com',
    '1986-10-03',
    37,
    'Philadelphia',
    2159876543,
    '19101',
    '215-98-7654',
    'DL13579',
    '2023-11-07T08:00:00',
    '2023-11-07T10:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-11-07",
        "post_notice_date": "2023-11-08",
        "created_at": "2023-11-07T10:00:00",
        "updated_at": "2023-11-07T11:00:00"
    }',
    '{
        "packages": "Basic Check",
        "adjudication": "ENGAGE",
        "status": "CLEAR",
        "completed_date": "2023-11-07T12:00:00",
        "created_at": "2023-11-07T13:00:00",
        "updated_at": "2023-11-07T14:00:00"
    }'
),
(
    'Logan Miller',
    'logan@example.com',
    '1992-08-18',
    31,
    'Detroit',
    3137654321,
    '48201',
    '313-76-5432',
    'DL64208',
    '2023-11-08T14:00:00',
    '2023-11-08T16:00:00',
    null,
    '{
        "packages": "Standard Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-08T18:00:00",
        "created_at": "2023-11-08T19:00:00",
        "updated_at": "2023-11-08T20:00:00"
    }'
),
(
    'Lucas Davis',
    'lucas@example.com',
    '1997-01-28',
    26,
    'Minneapolis',
    6129876543,
    '55401',
    '612-98-7654',
    'DL97531',
    '2023-11-09T09:00:00',
    '2023-11-09T11:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-11-09",
        "post_notice_date": "2023-11-10",
        "created_at": "2023-11-09T11:00:00",
        "updated_at": "2023-11-09T12:00:00"
    }',
    '{
        "packages": "Enhanced Check",
        "adjudication": "ENGAGE",
        "status": "CLEAR",
        "completed_date": "2023-11-09T13:00:00",
        "created_at": "2023-11-09T13:00:00",
        "updated_at": "2023-11-09T14:00:00"
    }'
),
(
    'Chloe Johnson',
    'chloe@example.com',
    '1989-06-15',
    34,
    'Tampa',
    8137654321,
    '33601',
    '813-76-5432',
    'DL24680',
    '2023-11-10T10:00:00',
    '2023-11-10T12:00:00',
    '{
        "status": "SCHEDULED",
        "pre_notice_date": "2023-11-10",
        "post_notice_date": "2023-11-11",
        "created_at": "2023-11-10T12:00:00",
        "updated_at": "2023-11-10T13:00:00"
    }',
    '{
        "packages": "Premium Check",
        "adjudication": "ENGAGE",
        "status": "CLEAR",
        "completed_date": "2023-11-10T14:00:00",
        "created_at": "2023-11-10T15:00:00",
        "updated_at": "2023-11-10T16:00:00"
    }'
),
(
    'Grace Smith',
    'grace@example.com',
    '1994-04-05',
    29,
    'Raleigh',
    9199876543,
    '27601',
    '919-98-7654',
    'DL13579',
    '2023-11-11T08:00:00',
    '2023-11-11T10:00:00',
    null,
    '{
        "packages": "Basic Check",
        "adjudication": "NONE",
        "status": "CLEAR",
        "completed_date": "2023-11-11T12:00:00",
        "created_at": "2023-11-11T13:00:00",
        "updated_at": "2023-11-11T14:00:00"
    }'
);
