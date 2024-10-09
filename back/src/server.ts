import express from "express";
import mainRoutes from "./system/routes.js";
import dotenv from "dotenv";
import auth from "./middlewares/auth.js";

export class App {
    private app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json());

        this.middleware();
        this.routes();
    }

    private routes(): void {
        mainRoutes.map((item) => {
            this.app.use(item[0], item[1]);
        });
    }

    private middleware(): void {
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
