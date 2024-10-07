import { Sequelize } from "sequelize";
import dotenv from "dotenv";

interface DatabaseType {
    type: string | undefined;
    database: string | undefined;
    host: string | undefined;
    port: number | undefined;
    user: string | undefined;
    password: string | undefined;
}

dotenv.config();

const type = process.env.DATABASE_TYPE;
const database = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

const connection: DatabaseType = {
    type,
    database,
    host,
    port,
    user,
    password,
};

const sequelize = new Sequelize(
    connection.database as string,
    connection.user as string,
    connection.password as string,
    {
        host: connection.host,
        dialect: connection.type as "postgres",
        port: connection.port,
        logging: false,

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

export default sequelize;
