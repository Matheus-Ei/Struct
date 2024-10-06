import express from "express";
import mainRoutes from "./system/mainRoutes.js";

export class App {
    private app: any;

    constructor() {
        this.app = express();
        this.routes();
    }

    private routes(): void {
        mainRoutes.map((item) => {
            this.app.use(item[0], item[1]);
        });
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            console.log("Running the server in the port " + port);
        });
    }
}

const app = new App();
app.listen(5000);
