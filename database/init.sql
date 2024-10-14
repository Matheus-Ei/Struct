CREATE TABLE users (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100),
    about TEXT,
    mail VARCHAR(100),
    nickname VARCHAR(50),
    password VARCHAR(255),
    photo BYTEA,
    paid BOOLEAN,
    last_paid_date DATE
);

CREATE TABLE settings (
    id SERIAL PRIMARY KEY,

    language VARCHAR(50),
    country VARCHAR(50),
    theme VARCHAR(50),

    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

CREATE TABLE project_type (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100)
);

CREATE TABLE project (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255),
    description TEXT,

    project_type_id INT,
    CONSTRAINT fk_project_type
        FOREIGN KEY (project_type_id)
        REFERENCES project_type (id),
    owner_user_id INT,
    CONSTRAINT fk_owner_user
        FOREIGN KEY (owner_user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

CREATE TABLE relationship_shared_project (
    id SERIAL PRIMARY KEY,
    permissions INT,

    user_shared_id INT,
    CONSTRAINT fk_user_shared
        FOREIGN KEY (user_shared_id)
        REFERENCES users (id)
        ON DELETE CASCADE,
    project_id INT,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project (id)
        ON DELETE CASCADE
);

CREATE TABLE module (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100),
    description TEXT
);

CREATE TABLE relationship_project_module (
    id SERIAL PRIMARY KEY,

    module_id INT,
    CONSTRAINT fk_module
        FOREIGN KEY (module_id)
        REFERENCES module (id),
    project_id INT,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project (id)
        ON DELETE CASCADE
);

CREATE TABLE page_data (
    id SERIAL PRIMARY KEY,

    name VARCHAR(100),
    emoji VARCHAR(10),
    description TEXT
);

CREATE TABLE page (
    id SERIAL PRIMARY KEY,

    page_data INT,
    CONSTRAINT fk_page_data
        FOREIGN KEY (page_data)
        REFERENCES page_data (id)
        ON DELETE CASCADE,
    parent_page_id INT NULL,
    CONSTRAINT fk_parent_page
        FOREIGN KEY (parent_page_id)
        REFERENCES page (id)
        ON DELETE CASCADE,
    project_id INT,
    CONSTRAINT fk_project
        FOREIGN KEY (project_id)
        REFERENCES project (id)
        ON DELETE CASCADE,
    module_id INT,
    CONSTRAINT fk_module
        FOREIGN KEY (module_id)
        REFERENCES module (id)
);

CREATE TABLE notes_page_data (
    page_data_id INT PRIMARY KEY,

    content TEXT,

    CONSTRAINT fk_page_data
        FOREIGN KEY (page_data_id)
        REFERENCES page_data (id)
        ON DELETE CASCADE
);

