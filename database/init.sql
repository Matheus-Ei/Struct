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

CREATE TABLE subscription (
    id SERIAL PRIMARY KEY,
    last_paid DATE,
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
    nickname VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    photo BYTEA,
    subscription_id INT,
    settings_id INT,
    CONSTRAINT fk_subscription
        FOREIGN KEY(subscription_id) 
        REFERENCES subscription (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_settings
        FOREIGN KEY(settings_id) 
        REFERENCES settings (id)
        ON DELETE CASCADE
);

CREATE TABLE project_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    project_type_id INT NOT NULL,
    owner_user_id INT NOT NULL,
    CONSTRAINT fk_project_type
        FOREIGN KEY(project_type_id)
        REFERENCES project_type (id),
    CONSTRAINT fk_owner_user
        FOREIGN KEY(owner_user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

CREATE TABLE relationship_shared_project (
    id SERIAL PRIMARY KEY,
    permissions INT NOT NULL,
    user_shared_id INT NOT NULL,
    project_id INT NOT NULL,
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

CREATE TABLE relationship_project_module (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL,
    project_id INT NOT NULL,
    CONSTRAINT fk_module
        FOREIGN KEY(module_id)
        REFERENCES module (id),
    CONSTRAINT fk_project
        FOREIGN KEY(project_id)
        REFERENCES project (id)
        ON DELETE CASCADE
);

CREATE TABLE page_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    emoji VARCHAR(10),
    description TEXT
);

CREATE TABLE page (
    id SERIAL PRIMARY KEY,
    page_data_id INT NOT NULL,
    parent_page_id INT NULL,
    project_id INT NOT NULL,
    module_id INT NOT NULL,
    CONSTRAINT fk_page_data
        FOREIGN KEY(page_data_id)
        REFERENCES page_data (id)
        ON DELETE CASCADE,
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
    content TEXT NOT NULL
) INHERITS (page_data);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    mail VARCHAR(200) NOT NULL,
    commentary VARCHAR(500),
    rating INT CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE tool (
    id SERIAL PRIMARY KEY,
    link VARCHAR(200) NOT NULL,
    name VARCHAR(50),
    description VARCHAR(500)
);
