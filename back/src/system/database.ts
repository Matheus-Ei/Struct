import { Sequelize } from "sequelize";

interface DatabaseType {
    type: string;
    database: string;
    host: string;
    port: number;
    user: string;
    password: string;
}

const connection: DatabaseType = {
    type: "postgres",
    database: "struct",
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Senha@1234",
};

const sequelize = new Sequelize(
    `${connection.type}://${connection.user}:${connection.password}@${connection.host}:${connection.port}/${connection.database}`,
    {
        dialect: "postgres",
        logging: false,
    }
);

export default sequelize;
