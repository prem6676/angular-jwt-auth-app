import mysql from 'mysql2/promise';


export const db = mysql.createPool({
host: 'localhost',
user: 'root',
password: 'Prem@6676',
database: 'angular_auth3'
});