import express from "express";
import dotenv from "dotenv";
import auth from "./middlewares/auth";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainRoutes from "./system/routes";

export class App {
    private app: any;

    constructor() {
        this.app = express();

        this.middlewares();
        this.routes();
    }

    private routes(): void {
        mainRoutes.map((item) => {
            this.app.use(item[0], item[1]);
        });
    }

    private middlewares(): void {
        this.app.use(cookieParser());
        this.app.use(express.json());

        this.app.use(
            cors({
                // origin: true,
                origin: ["https://dev.struct.me", "http://localhost:3000"],
                methods: "GET,POST,PUT,DELETE,OPTIONS",
                allowedHeaders: "Authorization, Content-Type",
                credentials: true,
            })
        );

        this.app.use(auth);
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.clear();
            console.log("Running the server in the port " + port);
        });
    }
}

const app = new App();

dotenv.config();
const port = Number(process.env.PORT);

app.listen(port);
