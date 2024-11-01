-- INSERT INTO MODULE TABLE
INSERT INTO module (name, description) 
VALUES ('notes', 'This module helps you to keep track of your learning, keep note of everything'),
	   ('list', 'List everything, from shopping lists to daily tasks');

-- INSERT INTO SUBSCRIPTION_PLAN TABLE
INSERT INTO subscription_plan (name, price) 
VALUES ('free', 0.00),
	   ('popular', 10.00),
	   ('premium', 40.00);

-- INSERT INTO SUBSCRIPTION_BENEFITS TABLE
INSERT INTO subscription_benefits (name) 
VALUES ('basic modules'),
	   ('advanced modules'),
	   ('unlimited collaboration'),
	   ('integration between modules'),
	   ('integration between tools');

-- INSERT INTO RELATIONSHIP_PLAN_BENEFITS TABLE
INSERT INTO relationship_plan_benefits (subscription_plan_id, subscription_benefits_id) 
VALUES (1, 1),
	   (2, 1),
	   (2, 4),
	   (3, 1),
	   (3, 2),
	   (3, 3),
	   (3, 4),
	   (3, 5);
