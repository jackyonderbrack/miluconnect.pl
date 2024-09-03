import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initUserModel } from '../models/user.model';


dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'database',
    process.env.DB_USER || 'user',
    process.env.DB_PASSWORD || 'password',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: console.log
    }
);

const User = initUserModel(sequelize)

export { sequelize, User };
