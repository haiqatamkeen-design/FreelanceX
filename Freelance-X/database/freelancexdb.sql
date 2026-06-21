-- =============================================================
--  FreelanceXdb — Complete Database Schema
--  Based on EER Diagram & Relational Mapping (Assignment #02)
--  Compatible with: MySQL 5.7+ / MariaDB (XAMPP)
--  Created for: Freelance-X Platform
-- =============================================================

-- Step 1: Create & select the database
CREATE DATABASE IF NOT EXISTS FreelanceXdb
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE FreelanceXdb;

-- =============================================================
-- TABLE 1: users
-- Super-class entity. Stores all system users (clients + freelancers).
-- role ENUM distinguishes between the two sub-types.
-- =============================================================
CREATE TABLE users (
  user_id    INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  full_name  VARCHAR(120)    NOT NULL,
  email      VARCHAR(180)    NOT NULL UNIQUE,
  phone      VARCHAR(20)     DEFAULT NULL,
  password   VARCHAR(255)    NOT NULL,           -- bcrypt hash
  role       ENUM('client','freelancer')  NOT NULL,
  avatar_url VARCHAR(500)    DEFAULT NULL,        -- profile photo URL
  created_at DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 2: clients
-- Sub-class of users (Specialization/Generalization rule).
-- client_id is both PK and FK referencing users(user_id).
-- =============================================================
CREATE TABLE clients (
  client_id    INT UNSIGNED  NOT NULL,
  company_name VARCHAR(160)  DEFAULT NULL,
  website      VARCHAR(300)  DEFAULT NULL,
  PRIMARY KEY (client_id),
  CONSTRAINT fk_client_user
    FOREIGN KEY (client_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 3: freelancers
-- Sub-class of users (Specialization/Generalization rule).
-- freelancer_id is both PK and FK referencing users(user_id).
-- =============================================================
CREATE TABLE freelancers (
  freelancer_id INT UNSIGNED   NOT NULL,
  bio           TEXT           DEFAULT NULL,
  hourly_rate   DECIMAL(10,2)  DEFAULT NULL,
  portfolio_url VARCHAR(500)   DEFAULT NULL,
  avg_rating    DECIMAL(3,2)   DEFAULT 0.00,     -- computed/updated on review insert
  title         VARCHAR(160)   DEFAULT NULL,      -- professional headline e.g. "Full Stack Developer"
  PRIMARY KEY (freelancer_id),
  CONSTRAINT fk_freelancer_user
    FOREIGN KEY (freelancer_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 4: skills
-- Master list of skills with category grouping.
-- =============================================================
CREATE TABLE skills (
  skill_id   INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  skill_name VARCHAR(100)  NOT NULL,
  category   VARCHAR(100)  NOT NULL,             -- e.g. "Programming", "Design", "Marketing"
  PRIMARY KEY (skill_id),
  UNIQUE KEY uq_skill_name (skill_name)
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 5: freelancer_skills
-- Junction table — Freelancer ↔ Skill (Many-to-Many).
-- Includes skill_proficiency as a relationship attribute.
-- =============================================================
CREATE TABLE freelancer_skills (
  freelancer_id     INT UNSIGNED  NOT NULL,
  skill_id          INT UNSIGNED  NOT NULL,
  skill_proficiency ENUM('beginner','intermediate','expert') NOT NULL DEFAULT 'intermediate',
  PRIMARY KEY (freelancer_id, skill_id),
  CONSTRAINT fk_fs_freelancer
    FOREIGN KEY (freelancer_id) REFERENCES freelancers(freelancer_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_fs_skill
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 6: projects
-- Posted by clients. Contains budget range, deadline, scope etc.
-- =============================================================
CREATE TABLE projects (
  project_id   INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  client_id    INT UNSIGNED    NOT NULL,
  title        VARCHAR(220)    NOT NULL,
  description  TEXT            NOT NULL,
  category     VARCHAR(100)    DEFAULT NULL,
  scope        ENUM('small','medium','large') DEFAULT 'medium',
  experience   ENUM('entry','intermediate','expert') DEFAULT 'intermediate',
  budget_min   DECIMAL(12,2)   DEFAULT NULL,
  budget_max   DECIMAL(12,2)   DEFAULT NULL,
  deadline     DATE            DEFAULT NULL,
  status       ENUM('open','in_progress','completed','cancelled') NOT NULL DEFAULT 'open',
  created_at   DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (project_id),
  CONSTRAINT fk_project_client
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 7: bids
-- Freelancers place bids on open projects.
-- Aggregation + Many-to-Many between freelancer and project.
-- =============================================================
CREATE TABLE bids (
  bid_id          INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  freelancer_id   INT UNSIGNED    NOT NULL,
  project_id      INT UNSIGNED    NOT NULL,
  proposed_amount DECIMAL(12,2)   NOT NULL,
  estimated_days  INT UNSIGNED    DEFAULT NULL,
  cover_letter    TEXT            DEFAULT NULL,
  status          ENUM('pending','accepted','rejected') NOT NULL DEFAULT 'pending',
  submitted_at    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (bid_id),
  CONSTRAINT fk_bid_freelancer
    FOREIGN KEY (freelancer_id) REFERENCES freelancers(freelancer_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_bid_project
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE KEY uq_bid_per_project (freelancer_id, project_id)   -- one bid per freelancer per project
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 8: accepted_bids
-- Overlapping Specialization on bids (accepted subset).
-- bid_id is PK+FK referencing bids.
-- =============================================================
CREATE TABLE accepted_bids (
  bid_id     INT UNSIGNED  NOT NULL,
  accepted_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (bid_id),
  CONSTRAINT fk_accepted_bid
    FOREIGN KEY (bid_id) REFERENCES bids(bid_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 9: rejected_bids
-- Overlapping Specialization on bids (rejected subset).
-- bid_id is PK+FK referencing bids.
-- =============================================================
CREATE TABLE rejected_bids (
  bid_id      INT UNSIGNED  NOT NULL,
  rejected_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (bid_id),
  CONSTRAINT fk_rejected_bid
    FOREIGN KEY (bid_id) REFERENCES bids(bid_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 10: contracts
-- Aggregation: Contract formed from Bid + Project (accepted bid).
-- Both bid_id and project_id are FKs.
-- =============================================================
CREATE TABLE contracts (
  contract_id INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  bid_id      INT UNSIGNED  NOT NULL,
  project_id  INT UNSIGNED  NOT NULL,
  start_date  DATE          NOT NULL,
  end_date    DATE          DEFAULT NULL,
  status      ENUM('active','completed','cancelled') NOT NULL DEFAULT 'active',
  created_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (contract_id),
  CONSTRAINT fk_contract_bid
    FOREIGN KEY (bid_id) REFERENCES bids(bid_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_contract_project
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 11: payments
-- Each contract can have one or more payment records.
-- =============================================================
CREATE TABLE payments (
  payment_id  INT UNSIGNED   NOT NULL AUTO_INCREMENT,
  contract_id INT UNSIGNED   NOT NULL,
  amount      DECIMAL(12,2)  NOT NULL,
  method      ENUM('card','bank_transfer','paypal','wallet') NOT NULL DEFAULT 'card',
  status      ENUM('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
  paid_at     DATETIME       DEFAULT NULL,
  created_at  DATETIME       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (payment_id),
  CONSTRAINT fk_payment_contract
    FOREIGN KEY (contract_id) REFERENCES contracts(contract_id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =============================================================
-- TABLE 12: reviews
-- Categorization/Union Rule: reviewer and reviewee can each be
-- a freelancer or a client (both are users — FK → users).
-- Constraint: reviewer_id ≠ reviewee_id (no self-review).
-- =============================================================
CREATE TABLE reviews (
  review_id    INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  contract_id  INT UNSIGNED  NOT NULL,
  reviewer_id  INT UNSIGNED  NOT NULL,   -- user who writes the review
  reviewee_id  INT UNSIGNED  NOT NULL,   -- user being reviewed
  rating       TINYINT       NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment      TEXT          DEFAULT NULL,
  added_at     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (review_id),
  CONSTRAINT fk_review_contract
    FOREIGN KEY (contract_id) REFERENCES contracts(contract_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_review_reviewer
    FOREIGN KEY (reviewer_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_review_reviewee
    FOREIGN KEY (reviewee_id) REFERENCES users(user_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
  -- Enforce: reviewer cannot review themselves
  CONSTRAINT chk_no_self_review CHECK (reviewer_id <> reviewee_id),
  -- One review per contract per direction
  UNIQUE KEY uq_review_per_contract (contract_id, reviewer_id)
) ENGINE=InnoDB;


-- =============================================================
-- SAMPLE SEED DATA — for testing the frontend immediately
-- =============================================================

-- Users (2 clients + 3 freelancers)
INSERT INTO users (full_name, email, phone, password, role, avatar_url) VALUES
('Ahmed Khan',      'ahmed@example.com',   '+92-300-1111111', '$2y$10$examplehash1', 'client',     'https://i.pravatar.cc/96?img=1'),
('Sara Malik',      'sara@example.com',    '+92-300-2222222', '$2y$10$examplehash2', 'client',     'https://i.pravatar.cc/96?img=5'),
('Ali Hassan',      'ali@example.com',     '+92-300-3333333', '$2y$10$examplehash3', 'freelancer', 'https://i.pravatar.cc/96?img=11'),
('Fatima Noor',     'fatima@example.com',  '+92-300-4444444', '$2y$10$examplehash4', 'freelancer', 'https://i.pravatar.cc/96?img=20'),
('Usman Tariq',     'usman@example.com',   '+92-300-5555555', '$2y$10$examplehash5', 'freelancer', 'https://i.pravatar.cc/96?img=33');

-- Clients
INSERT INTO clients (client_id, company_name, website) VALUES
(1, 'TechCorp Pvt Ltd',   'https://techcorp.pk'),
(2, 'Creative Studio',    'https://creativestudio.pk');

-- Freelancers
INSERT INTO freelancers (freelancer_id, bio, hourly_rate, portfolio_url, avg_rating, title) VALUES
(3, 'Full-stack developer with 5+ years experience in Laravel and Vue.js.', 35.00, 'https://ali.dev', 4.80, 'Full Stack Developer'),
(4, 'UI/UX designer passionate about clean, user-centered interfaces.',      28.00, 'https://fatima.design', 4.90, 'UI/UX Designer'),
(5, 'SEO and digital marketing specialist. Helped 50+ clients grow online.', 22.00, NULL, 4.70, 'Digital Marketing Expert');

-- Skills
INSERT INTO skills (skill_name, category) VALUES
('PHP',           'Programming'),
('Laravel',       'Programming'),
('Vue.js',        'Programming'),
('MySQL',         'Database'),
('HTML/CSS',      'Programming'),
('JavaScript',    'Programming'),
('Figma',         'Design'),
('Adobe XD',      'Design'),
('UI/UX Design',  'Design'),
('SEO',           'Marketing'),
('Google Ads',    'Marketing'),
('Content Writing','Marketing');

-- Freelancer Skills
INSERT INTO freelancer_skills (freelancer_id, skill_id, skill_proficiency) VALUES
(3, 1, 'expert'), (3, 2, 'expert'), (3, 3, 'expert'), (3, 4, 'expert'), (3, 5, 'expert'),
(4, 7, 'expert'), (4, 8, 'expert'), (4, 9, 'expert'), (4, 5, 'intermediate'),
(5, 10, 'expert'), (5, 11, 'expert'), (5, 12, 'intermediate');

-- Projects
INSERT INTO projects (client_id, title, description, category, scope, experience, budget_min, budget_max, deadline, status) VALUES
(1, 'E-commerce Website Development',
   'Need a full e-commerce site built with Laravel backend and Vue.js frontend. Must include product management, cart, and payment gateway.',
   'Web Development', 'large', 'expert', 800.00, 1500.00, '2026-07-30', 'open'),
(2, 'Mobile App UI Design',
   'Design UI screens for a food delivery mobile app. Need 15-20 screens in Figma with a modern, clean aesthetic.',
   'Design', 'medium', 'intermediate', 300.00, 600.00, '2026-07-15', 'open');

-- Bids
INSERT INTO bids (freelancer_id, project_id, proposed_amount, estimated_days, cover_letter, status) VALUES
(3, 1, 1200.00, 30, 'I have built 10+ e-commerce platforms using Laravel and Vue.js. I can deliver this within 30 days with full documentation.', 'pending'),
(4, 2, 450.00,  14, 'I specialize in mobile UI design with 5 years of Figma experience. I will provide 20 screens with a design system.', 'pending');


-- =============================================================
-- USEFUL VIEWS for the frontend API
-- =============================================================

-- View: Full freelancer profile (joins users + freelancers)
CREATE OR REPLACE VIEW view_freelancer_profiles AS
SELECT
  f.freelancer_id,
  u.full_name,
  u.email,
  u.avatar_url,
  u.created_at AS member_since,
  f.bio,
  f.hourly_rate,
  f.portfolio_url,
  f.avg_rating,
  f.title
FROM freelancers f
JOIN users u ON u.user_id = f.freelancer_id;

-- View: Open projects with client info
CREATE OR REPLACE VIEW view_open_projects AS
SELECT
  p.project_id,
  p.title,
  p.description,
  p.category,
  p.scope,
  p.experience,
  p.budget_min,
  p.budget_max,
  p.deadline,
  p.status,
  p.created_at,
  u.full_name  AS client_name,
  c.company_name
FROM projects p
JOIN clients  c ON c.client_id = p.client_id
JOIN users    u ON u.user_id   = p.client_id
WHERE p.status = 'open';

-- View: Bids with freelancer details
CREATE OR REPLACE VIEW view_bids_detail AS
SELECT
  b.bid_id,
  b.project_id,
  b.proposed_amount,
  b.estimated_days,
  b.cover_letter,
  b.status,
  b.submitted_at,
  u.full_name   AS freelancer_name,
  u.avatar_url  AS freelancer_avatar,
  f.avg_rating  AS freelancer_rating,
  f.title       AS freelancer_title
FROM bids        b
JOIN freelancers f ON f.freelancer_id = b.freelancer_id
JOIN users       u ON u.user_id       = b.freelancer_id;
