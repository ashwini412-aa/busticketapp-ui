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



// create route table

create table route(
id int primary key auto_increment,
source varchar(15) not null,
destination varchar(15) not null,
date timestamp not null default current_timestamp

);

// inserting values into route table

insert into route(source,destination) values ('Chandigarh' , 'Delhi');

// create bus details table

create table bus_details(
id int primary key auto_increment,
provider varchar(20) not null,
source varchar(20) not null,
destination varchar(20) not null,
Duration_hours int(2) not null,
price int(4) not null

);

// inserting values into bus_details table

insert into bus_details(provider,source,destination,Duration_hours,price) values ('volvo','Chandigarh','Delhi','8','899');


// create booked ticket table

create table booked_ticket(
id int primary key auto_increment,
name varchar(50) not null,
source varchar(20) not null,
destination varchar(20) not null,
Duration_hours int(2) not null,
price int(4) not null,
booked_date timestamp not null default current_timestamp,
journey_date timestamp not null,
modified_date timestamp not null default current_timestamp on update current_timestamp,
Reserved boolean not null default 1
);

//inserting into booked ticked table


insert into booked_ticket(name,source,destination,Duration_hours,price,journey_date) values ('siva','chandigarh','delhi','8','899','20/11/19');
