-- INSERT INTO TYPE TABLE
INSERT INTO project_type (name) 
VALUES ('singular'),
	   ('compost'),
 	   ('monopage');


-- INSERT INTO MODULE TABLE
INSERT INTO module (name, description) 
VALUES ('notes', 'This module helps you to keep track of your learning, keep note of everthing'),
 	   ('list', 'List everthing, from shopping lists to dailly tasks');


-- INSERT INTO PROJECT TABLE
INSERT INTO project (title, description, project_type_id, owner_user_id)
VALUES ('Programming project', 'I will use this project to manage my programming learning', 1, 1), 
	   ('Abex IV', 'Project to keep track of the Abex IV progress', 2, 1),
	   ('Notes about statistics', 'Here will be my notes about statistics', 1, 1),
 	   ('Market list', 'List to remember what i need to buy in the supermarket', 3, 1);


-- INSERT INTO RELATIONSHIP TABLE BETWEEN MODULE AND PROJECT
INSERT INTO relationship_project_module (module_id, project_id)
VALUES (2, 1),
	   (1, 2),
	   (2, 2),
	   (1, 3),
	   (1, 4);
