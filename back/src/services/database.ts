// Library
import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

interface CredentialsType {
  database: string;
  host: string;
  port: number;
  user: string;
  password: string;

  ssl: {
    require: boolean;
    rejectUnauthorized: boolean;
  };
}

const credentials: CredentialsType = {
  database: process.env.DATABASE_NAME as string,
  host: process.env.DATABASE_HOST as string,
  port: Number(process.env.DATABASE_PORT) || 5432,
  user: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD as string,

  ssl: { require: true, rejectUnauthorized: false },
};

const pool = new Pool(credentials);

pool
  .connect()
  .then((client) => {
    client.release();
  })
  .catch((error) => {
    console.error('❌ -> Error connecting to the database', error);
  });

export default pool;
