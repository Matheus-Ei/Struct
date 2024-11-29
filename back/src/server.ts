// Libraries
import cookieParser from "cookie-parser";
import compression from "compression";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Local
import "./services/database/associations.js";
import mainRoutes from "./system/routes.js";
import auth from "./middlewares/auth.js";

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
        this.app.use(compression());

        this.app.use(
            cors({
                origin: ["https://dev.struct.me", "http://localhost:3000"],
                methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
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
const port = Number(process.env.BACKEND_PORT);

app.listen(port);
