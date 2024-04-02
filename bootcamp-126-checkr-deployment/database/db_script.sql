-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema checkr
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema checkr
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema checkr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `checkr` DEFAULT CHARACTER SET utf8mb3 ;
USE `checkr` ;

-- -----------------------------------------------------
-- Table `checkr`.`candidates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`candidates` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `dob` DATE NULL DEFAULT NULL,
  `age` INT NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `phone` BIGINT NULL DEFAULT NULL,
  `zipcode` VARCHAR(45) NULL DEFAULT NULL,
  `social_security` VARCHAR(45) NULL DEFAULT NULL,
  `driver_license` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `adverse_actions` JSON NULL COMMENT '{
    "status": "ENUM(\'SCHEDULED\', \'PENDING\', \'CANCELLED\') NULL",
    "pre_notice_date": "DATE NULL",
    "post_notice_date": "DATE NULL",
    "created_at": "DATETIME NULL",
    "updated_at": "DATETIME NULL"
  }',
CHECK ( JSON_SCHEMA_VALID( '{
    "type": "object",
    "properties": {
        "status": { "enum": ["SCHEDULED", "PENDING", "CANCELLED"] },
        "pre_notice_date": { "type": "string", "format": "date" },
        "post_notice_date": { "type": "string", "format": "date" },
        "created_at": { "type": "string", "format": "date-time" },
        "updated_at": { "type": "string", "format": "date-time" }
    },
    "required": ["status","pre_notice_date","post_notice_date"]
    }',
    adverse_actions
    ) OR `adverse_actions` IS NULL),
  `report` JSON NULL COMMENT '{
    "packages": "VARCHAR(45) NULL",
    "adjudication": "ENUM(\'ENGAGE\', \'ADVERSE_ACTION\', \'NONE\') NULL",
    "status": "ENUM(\'CLEAR\', \'CONSIDER\') NULL",
    "completed_date": "DATETIME NULL",
    "created_at": "DATETIME NULL",
    "updated_at": "DATETIME NULL"
  }',
  PRIMARY KEY (`id`),
 CHECK (JSON_SCHEMA_VALID( '{
  "type": "object",
  "properties": {
    "packages": { "type": "string", "maxLength": 45 },
    "adjudication": { "enum": ["ENGAGE", "ADVERSE_ACTION", "NONE"] },
    "status": { "enum": ["CLEAR", "CONSIDER"] },
    "completed_date": { "type": "string", "format": "date-time" },
    "created_at": { "type": "string", "format": "date-time" },
    "updated_at": { "type": "string", "format": "date-time" }
  },
  "required": ["packages", "adjudication", "status","completed_date"]
 }',
report
))

)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `checkr`.`court_searches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`court_searches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `checkr`.`candidate_court_searches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`candidate_court_searches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` ENUM('CLEAR', 'CONSIDER') NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `court_searches_id` INT NOT NULL,
  `candidates_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidate_court_searches_court_searches_idx` (`court_searches_id` ASC) VISIBLE,
  INDEX `fk_candidate_court_searches_candidates1_idx` (`candidates_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_court_searches_candidates1`
    FOREIGN KEY (`candidates_id`)
    REFERENCES `checkr`.`candidates` (`id`),
  CONSTRAINT `fk_candidate_court_searches_court_searches`
    FOREIGN KEY (`court_searches_id`)
    REFERENCES `checkr`.`court_searches` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `checkr`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(150) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
