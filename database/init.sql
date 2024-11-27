-- Enums
CREATE TYPE subscription_status AS ENUM ('Active', 'Inactive', 'Suspended', 'Canceled');
CREATE TYPE autenticator_type AS ENUM ('Default', 'Auth');

-- Tables
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    about TEXT,
    mail VARCHAR(100) NOT NULL UNIQUE,
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    autenticator autenticator_type NOT NULL DEFAULT 'Default',
    nickname VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(400) -- Stores only the image URL
);

CREATE TABLE subscription_plan (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE subscription (
    id SERIAL PRIMARY KEY,
    last_paid DATE,
    status subscription_status,
    subscription_plan_id INT NOT NULL,
    user_id INT NOT NULL UNIQUE,

    CONSTRAINT fk_subscription_plan FOREIGN KEY (subscription_plan_id) 
        REFERENCES subscription_plan (id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (user_id) 
        REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    language VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    user_id INT NOT NULL UNIQUE,

    CONSTRAINT fk_user FOREIGN KEY (user_id) 
        REFERENCES users (id) ON DELETE CASCADE
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

    CONSTRAINT fk_owner_user FOREIGN KEY (owner_user_id)
        REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE relationship_shared_project (
    id SERIAL PRIMARY KEY,
    permission_level_id INT NOT NULL,
    user_shared_id INT NOT NULL,
    project_id INT NOT NULL,

    CONSTRAINT fk_permission_level FOREIGN KEY (permission_level_id)
        REFERENCES permission_level (id),
    CONSTRAINT fk_user_shared FOREIGN KEY (user_shared_id)
        REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT fk_project FOREIGN KEY (project_id)
        REFERENCES project (id) ON DELETE CASCADE,
    CONSTRAINT unique_user_project_permission UNIQUE (user_shared_id, project_id) -- Avoid duplicates
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
    position INT DEFAULT 0,
    parent_page_id INT NULL,
    project_id INT NOT NULL,
    module_id INT NULL,

    CONSTRAINT fk_parent_page FOREIGN KEY (parent_page_id)
        REFERENCES page (id) ON DELETE CASCADE,
    CONSTRAINT fk_project FOREIGN KEY (project_id)
        REFERENCES project (id) ON DELETE CASCADE,
    CONSTRAINT fk_module FOREIGN KEY (module_id)
        REFERENCES module (id)
);

CREATE TABLE notes_page_data (
    id SERIAL PRIMARY KEY,
    page_id INT NOT NULL,
    content TEXT NOT NULL,

    CONSTRAINT fk_notes_page FOREIGN KEY (page_id)
        REFERENCES page (id) ON DELETE CASCADE
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

-- Functions
CREATE OR REPLACE FUNCTION get_children(parent_id INT)
RETURNS JSONB LANGUAGE SQL AS $$
    SELECT COALESCE(
        JSONB_AGG(
            JSONB_BUILD_OBJECT(
                'id', child.id,
                'name', child.name,
                'emoji', child.emoji,
                'position', child.position,
                'description', child.description,
                'children_pages', get_children(child.id)
            )
            ORDER BY child.position, child.id
        ),
        '[]'::JSONB
    )
    FROM page AS child
    WHERE child.parent_page_id = parent_id;
$$;

-- Indexes
CREATE INDEX idx_subscription_user_id ON subscription (user_id);
CREATE INDEX idx_settings_user_id ON settings (user_id);
CREATE INDEX idx_page_project_id ON page (project_id);
