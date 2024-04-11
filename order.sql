use testsql;
-- create table uses (id int primary key auto_increment, name varchar(255) not null, age int null, email varchar(255) null default "admin@gmail.com", address varchar(255) null);
-- create table product ( id int primary key auto_increment, name varchar(255) not null, stor

-- create table store (id int primary key auto_increment, name varchar(255) not null, address varchar(255) not null, phoneNumber varchar(255) not null, email varchar(255) not null , mst varchar(30) not null, type enum("businis","person"));
-- create table product ( id int primary key auto_increment, name varchar(255) not null , storeId int not null, price double not null, discount double default 0, foreign key (storeID) REFERENCES store(id));
-- create table rules ( id int primary key auto_increment , name varchar(255) not null , is_active boolean);
-- create table voucher( id int primary key auto_increment , name varchar(255) , ruleId int not null, date_start date, date_end date, foreign  key (ruleId) references rules(id) ) ;
-- create table orders (id int primary key auto_increment , storeID int not null, productID int not null, amount int not null ,discount double not null ,total_price double not null ,final_price double not null, customerId int not null , foreign key ( storeId) references store(id) ,voucherId int not null, foreign key ( productId) references  product(id) , foreign key (customerId ) references uses(id) , foreign key (voucherId) references voucher(id));


-- alter table rules add script varchar(255)