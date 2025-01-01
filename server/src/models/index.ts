import { Sequelize } from "sequelize-typescript";
import "pg-hstore";
import "pg";
import User from "./User";

import { config } from "dotenv";
config(); // Подключение переменных окружения


const sequelize = new Sequelize(`postgres://${process.env.DB_USER || "postgres"}:${process.env.DB_PASSWORD || "password"}@${process.env.DB_HOST || "localhost"}:${process.env.DB_PORT || "5432"}/${process.env.DB_NAME || "dbname"}`);

sequelize.addModels([User]);

export { User };

export const initDB = async () => {
    await sequelize.authenticate();
    sequelize.sync({ force: false })  // force: true сбрасывает таблицы, force: false - создаст таблицу только если она не существует
        .then(() => {
            console.log('Database synced successfully');
        })
        .catch((err) => {
            console.error('Error syncing database:', err);
        });
};
