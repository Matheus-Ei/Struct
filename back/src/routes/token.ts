import { Router } from "express";
import TokenController from "../controllers/token.js";

class TokenRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/refresh", TokenController.refresh);

        this.router.get("/check", TokenController.check);
    }
}

export default new TokenRoute();
