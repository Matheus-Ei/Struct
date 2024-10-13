-- -- INSERT INTO PROJECT TABLE
-- INSERT INTO project (title, description, project_type_id, owner_user_id) 
-- VALUES ('Programming project', 'I will use this project to manage my programming learning', 1, 5), 
-- 	   ('Abex IV', 'Project to keep track of the Abex IV progress', 2, 5),
-- 	   ('Notes about statistics', 'Here will be my notes about statistics', 1, 5),
-- 	   ('Market list', 'List to remember what i need to buy in the supermarket', 3, 5);


-- -- INSERT INTO MODULE TABLE
-- INSERT INTO module (name, description) 
-- VALUES ('notes', 'This module helps you to keep track of your learning, keep note of everthing'),
-- 	   ('list', 'List everthing, from shopping lists to dailly tasks');


-- -- INSERT INTO RELATIONSHIP TABLE BETWEEN MODULE AND PROJECT
-- INSERT INTO relationship_project_module (module_id, project_id)
-- VALUES (2, 2);


-- -- SELECT PROJECTS INFORMATION
-- SELECT project.id AS id,
-- 	   project.title AS title,
-- 	   project.description AS description,
-- 	   MAX(project_type.name) as type,
-- 	   ARRAY_AGG(INITCAP(module.name)) AS module
-- FROM relationship_project_module
-- JOIN project ON relationship_project_module.project_id = project.id
-- JOIN module ON relationship_project_module.module_id = module.id
-- JOIN project_type ON project.project_type_id = project_type.id
-- WHERE owner_user_id = 5
-- GROUP BY project.id;