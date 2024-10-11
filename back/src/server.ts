// Libraries
import express from "express";
import dotenv from "dotenv";
import auth from "./middlewares/auth.js";

// Middlewares
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import mainRoutes from "./system/routes.js";

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
                credentials: true,
                origin: true,
            })
        );

        this.app.use(auth);
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log("Running the server in the port " + port);
        });
    }
}

const app = new App();

dotenv.config();
const port = Number(process.env.PORT);
app.listen(port);
