use db_dev;
insert into permissions (id, type, created_at, updated_at) values (1, 'Admin', '2021-02-18 00:00:00', '2021-02-18 00:00:00');
insert into permissions (id, type, created_at, updated_at) values (2, 'User', '2021-02-18 00:00:00', '2021-02-18 00:00:00');
insert into users (username, id, first_name, last_name, email, password, permission_id, created_at, updated_at) values ('Admin', '7ab25e23-f2cf-448d-a595-6c464188ff0f', 'Admin_First', 'Admin_Last', 'admin@admin.com', '$2y$10$fqbGddroZCEmKIiG2DkkReK6DG5uqeu9yWfU.BNsg/ohsh4E7D0Z2', 1, '2021-02-18 00:00:00', '2021-02-18 00:00:00');
insert into users (username, id, first_name, last_name, email, password, permission_id, created_at, updated_at) values ('Test', '6ee5a55c-7876-4031-ad61-51bf391e17f3', 'Test_First', 'Test_Last', 'test@test.com', '$2y$10$z18KR1ppidbwDy7GgQGNgOpUQK8LJmk3g3Et0iy1tjc1h/ba8A/j2', 2, '2021-02-18 00:00:00', '2021-02-18 00:00:00');
