import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.SQLSERVER_DATABASE,
    process.env.SQLSERVER_USER,
    process.env.SQLSERVER_PASSWORD,
    {
        host: process.env.SQLSERVER_HOST,
        dialect: 'mssql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);