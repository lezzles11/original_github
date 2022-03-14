cd 
psql postgres
DROP DATABASE hbs_auth_temp; 
CREATE DATABASE hbs_auth_temp; 
\q
cd desktop
cd modules
cd knex_test_db 
knex migrate:latest
knex seed:run 
