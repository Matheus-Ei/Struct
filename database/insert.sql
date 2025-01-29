INSERT INTO module (name, description) 
VALUES ('notes', 'This module helps you to keep track of your learning, keep note of everything'),
	   ('list', 'List everything, from shopping lists to daily tasks');

INSERT INTO subscription_plan (name, price) 
VALUES ('free', 0.00),
	   ('popular', 10.00),
	   ('premium', 40.00);

INSERT INTO permission_level (name, description)
VALUES ('owner', 'The owner of the project, can do anything'),
       ('admin', 'The admin of the project, can do anything except delete the project'),
       ('editor', 'The editor of the project, can edit everything except the project itself'),
       ('commenter', 'The commenter of the project, can only comment on the project'),
       ('filler', 'The filler of the project, can only fill forms and informations in the project, withou editing'),
       ('viewer', 'The viewer of the project, can only view the project');

/* INSERT INTO settings (language, country)
VALUES ('pt-br', 'Brazil');

INSERT INTO subscription (last_paid, subscription_plan_id, status)
VALUES (CURRENT_DATE, 1, 'Active');

INSERT INTO users (name, mail, nickname, password, subscription_id, settings_id)
VALUES ('Developer', 'dev@gmail.com', 'dev', '123', 1, 1); */
