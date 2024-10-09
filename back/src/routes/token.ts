import { Router } from "express";
import TokenController from "../controllers/token.js";

class TokenRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/refresh", TokenController.refresh);

        this.router.post("/check", TokenController.check);
    }
}

export default new TokenRoute();
