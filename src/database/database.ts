import { createPool } from 'mysql2/promise';
import { isStringObject } from 'util/types';
require('dotenv').config()

const host = process.env.DB_HOST;
 // @ts-ignore
const port = +process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
 // @ts-ignore
const conexion = +process.env.DB_CONNECTION_LIMIT;

export async function Connect(){
    console.log([host,port,user,password,database,conexion])

    const connection = await createPool({
        host: host,
        port: port,
        user: user,
        password: password,
        database: database,
        connectionLimit: conexion,
    });
    return connection; 
}

/* import { createPool } from 'mysql2/promise';
require('dotenv').config()

export async function Connect(){

    const connection = await createPool({
        host: '10.0.201.38',
        port: 3311,
        user: 'root',
        password: 'faselu',
        database: 'trader_admingt',
        connectionLimit: 10,
    });
    return connection; 
} */