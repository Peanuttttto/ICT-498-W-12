/*
SQLyog Enterprise - MySQL GUI v8.14 
MySQL - 5.5.5-10.4.28-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `department` (
	`dept_id` double ,
	`dept_name` varchar (90)
); 
insert into `department` (`dept_id`, `dept_name`) values('001','IT');
insert into `department` (`dept_id`, `dept_name`) values('002','HR');
insert into `department` (`dept_id`, `dept_name`) values('003','ACC');
