-- migrate:up
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- migrate:down

DROP TYPE IF EXISTS user_role;