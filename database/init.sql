-- Enums
CREATE TYPE subscription_status AS ENUM ('Active', 'Inactive', 'Suspended', 'Canceled');
CREATE TYPE visibility_type AS ENUM ('Public', 'Private');

-- Tables
CREATE TABLE account (
  id SERIAL PRIMARY KEY,

  full_name VARCHAR(100) NOT NULL,
  nickname VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,

  is_verified BOOLEAN DEFAULT FALSE,
  picture VARCHAR(400),
  bio TEXT,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_settings (
  id SERIAL PRIMARY KEY,

  language VARCHAR(50) DEFAULT 'EN',
  country VARCHAR(50) DEFAULT 'US',
  theme VARCHAR(100) DEFAULT 'Default',

  account_id INT REFERENCES account (id) ON DELETE CASCADE
);

CREATE TABLE subscription_plan (
  id SERIAL PRIMARY KEY,

  title VARCHAR(100) NOT NULL UNIQUE,
  price NUMERIC(10, 2) NOT NULL CHECK (price > 0)
);

CREATE TABLE subscription (
  id SERIAL PRIMARY KEY,

  last_paid DATE DEFAULT CURRENT_DATE,
  status subscription_status DEFAULT,

  subscription_plan_id INT REFERENCES subscription_plan (id) ON DELETE CASCADE,
  account_id INT REFERENCES account (id) ON DELETE CASCADE
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,

  name VARCHAR(50) NOT NULL,
  description TEXT
);

CREATE TABLE project (
  id SERIAL PRIMARY KEY,

  title VARCHAR(255) NOT NULL,
  description TEXT,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_settings (
  id SERIAL PRIMARY KEY,

  visibility visibility_type DEFAULT 'Private',

  project_id INT UNIQUE REFERENCES project (id) ON DELETE CASCADE
);

CREATE TABLE shared_project (
  id SERIAL PRIMARY KEY,

  role_id INT REFERENCES role (id),
  account_id INT REFERENCES account (id) ON DELETE CASCADE,
  project_id INT REFERENCES project (id) ON DELETE CASCADE,

  UNIQUE (account_id, project_id)
);

CREATE TABLE module (
  id SERIAL PRIMARY KEY,

  title VARCHAR(100) UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE page (
  id SERIAL PRIMARY KEY,

  title VARCHAR(100) NOT NULL,
  description TEXT,
  emoji VARCHAR(10),
  position FLOAT DEFAULT 0,

  parent_page_id INT REFERENCES page (id) ON DELETE CASCADE,
  project_id INT REFERENCES project (id) ON DELETE CASCADE,
  module_id INT REFERENCES module (id),

  UNIQUE(project_id, parent_page_id, position)
);

CREATE TABLE note_page_data (
  id SERIAL PRIMARY KEY,

  content TEXT NOT NULL,
  page_id INT REFERENCES page (id) ON DELETE CASCADE
);

CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,

  email VARCHAR(200) NOT NULL,
  commentary TEXT,
  rating INT CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE tool (
  id SERIAL PRIMARY KEY,

  title VARCHAR(50) UNIQUE,
  description VARCHAR(500),
  endpoint VARCHAR(200) NOT NULL
);

-- Functions
CREATE OR REPLACE FUNCTION get_child(parent_page_id INT)
RETURNS JSONB
LANGUAGE SQL 
AS $$
  SELECT COALESCE(
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'id', child_page.id,
        'title', child_page.title,
        'emoji', child_page.emoji,
        'position', child_page.position,
        'description', child_page.description,
        'child_pages', get_children(child_page.id)
      )
      ORDER BY child_page.position, child_page.id
    ), '[]'::JSONB
  )
  FROM page AS child_page
  WHERE child_page.parent_page_id = parent_page_id;
$$;
