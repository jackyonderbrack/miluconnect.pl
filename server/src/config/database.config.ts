import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


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

sequelize.sync().then(() => {
    console.log('Baza danych i tabele zostały utworzone!');
}).catch(error => {
    console.error('Błąd synchronizacji bazy danych:', error);
});

export { sequelize };
