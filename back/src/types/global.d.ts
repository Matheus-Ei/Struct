declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_TYPE: string;
    DATABASE_NAME: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;

    JWT_SECRET: string;
    REFRESH_SECRET: string;

    BACKEND_PORT: number;

    UPLOADS_PATH: string;
  }
}
