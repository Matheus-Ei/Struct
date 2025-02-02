declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_TYPE: string;
    DATABASE_NAME: string;
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
  }
}
