//Task #1: Create Database

create database busTicket_db;
use busTicket_db;

//Task 2: Create register table


create table register(
id int primary key auto_increment,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
phoneNo int(10),
unique(email),

);

//Task 3: inserting values in register table

insert into register(name,email,password,phoneNo) values ( 'Naresh','naresh@gmail.com', 'pass123', '7888738392');

insert into register (name,email,password,phoneNo) values ( 'Siva','siva@gmail.com', 'pass123', '7888738392');

insert into register(name,email,password,phoneNo) values ( 'Prabhu','prabhu@gmail.com', 'pass123', '7888738392');

// Login Table
create table login(
id int primary key auto_increment,
email varchar(50) not null,
password varchar(50) not null

);

//inserting into login table

insert into login (email,password) values ('siva@gmail.com','pass123');

// create route table

create table route(
id int primary key auto_increment,
source varchar(15) not null,
destination varchar(15) not null,
date timestamp not null default current_timestamp

);

// inserting values into route table

insert into route(source,destination) values ('Chandigarh' , 'Delhi');



