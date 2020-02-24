create table role
(
  role_id   int auto_increment
    primary key,
  role_name int not null
);

create table user
(
  user_id       int auto_increment
    primary key,
  user_name     varchar(45) not null,
  user_password varchar(45) not null,
  user_email    varchar(45) not null,
  user_role_id  int         not null,
  constraint user_role_role_id_fk
    foreign key (user_role_id) references role (role_id)
);