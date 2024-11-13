// Libraries
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

interface CredentialsType {
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

const credentials: CredentialsType = {
    type,
    database,
    host,
    port,
    user,
    password,
};

const connection = new Sequelize(
    credentials.database as string,
    credentials.user as string,
    credentials.password as string,
    {
        host: credentials.host,
        dialect: credentials.type as "postgres",
        port: credentials.port,
        logging: false,

        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

export default connection;
