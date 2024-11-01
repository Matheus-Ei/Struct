CREATE TABLE subscription_plan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE subscription_benefits (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE relationship_plan_benefits (
    id SERIAL PRIMARY KEY,
    subscription_plan_id INT NOT NULL,
    subscription_benefits_id INT NOT NULL,

    CONSTRAINT fk_subscription_plan
        FOREIGN KEY(subscription_plan_id) 
        REFERENCES subscription_plan (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_subscription_benefits
        FOREIGN KEY(subscription_benefits_id) 
        REFERENCES subscription_benefits (id)
        ON DELETE CASCADE
);

CREATE TYPE subscription_status AS ENUM ('Active', 'Inactive', 'Suspended', 'Canceled');
CREATE TABLE subscription (
    id SERIAL PRIMARY KEY,
    last_paid DATE,
    status subscription_status,
    subscription_plan_id INT NOT NULL,

    CONSTRAINT fk_subscription_plan
        FOREIGN KEY(subscription_plan_id) 
        REFERENCES subscription_plan (id)
        ON DELETE CASCADE
);

CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    language VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    about TEXT,
    mail VARCHAR(100) NOT NULL UNIQUE,
    nickname VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(400), -- Saves only the image URL
    subscription_id INT NOT NULL,
    settings_id INT NOT NULL,

    CONSTRAINT fk_subscription
        FOREIGN KEY(subscription_id) 
        REFERENCES subscription (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_settings
        FOREIGN KEY(settings_id) 
        REFERENCES settings (id)
        ON DELETE CASCADE
);

CREATE TABLE permission_level (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    owner_user_id INT NOT NULL,

    CONSTRAINT fk_owner_user
        FOREIGN KEY(owner_user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

CREATE TABLE relationship_shared_project (
    id SERIAL PRIMARY KEY,
    permission_level_id INT NOT NULL,
    user_shared_id INT NOT NULL,
    project_id INT NOT NULL,

    CONSTRAINT fk_permission_level
        FOREIGN KEY(permission_level_id)
        REFERENCES permission_level (id),
    CONSTRAINT fk_user_shared
        FOREIGN KEY(user_shared_id)
        REFERENCES users (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_project
        FOREIGN KEY(project_id)
        REFERENCES project (id)
        ON DELETE CASCADE
);

CREATE TABLE module (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE page (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emoji VARCHAR(10),
    description TEXT,
    parent_page_id INT NULL,
    project_id INT NOT NULL,
    module_id INT NOT NULL,

    CONSTRAINT fk_parent_page
        FOREIGN KEY(parent_page_id)
        REFERENCES page (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_project
        FOREIGN KEY(project_id)
        REFERENCES project (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_module
        FOREIGN KEY(module_id)
        REFERENCES module (id)
);

CREATE TABLE notes_page_data (
    id SERIAL PRIMARY KEY,
    page_id INT NOT NULL,

    content TEXT NOT NULL,

    CONSTRAINT fk_notes_page
        FOREIGN KEY(page_id)
        REFERENCES page (id)
        ON DELETE CASCADE
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    mail VARCHAR(200) NOT NULL,
    commentary VARCHAR(500),
    rating INT CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE tool (
    id SERIAL PRIMARY KEY,
    endpoint VARCHAR(200) NOT NULL,
    name VARCHAR(50),
    description VARCHAR(500)
);
