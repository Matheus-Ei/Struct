-- INSERT INTO MODULE TABLE
INSERT INTO module (name, description) 
VALUES ('notes', 'This module helps you to keep track of your learning, keep note of everything'),
	   ('list', 'List everything, from shopping lists to daily tasks');

-- INSERT INTO SUBSCRIPTION_PLAN TABLE
INSERT INTO subscription_plan (name, price) 
VALUES ('free', 0.00),
	   ('popular', 10.00),
	   ('premium', 40.00);

-- Funcion to select childrens recursivaly in the pages table
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

