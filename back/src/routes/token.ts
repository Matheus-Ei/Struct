// Libraries
import { Router } from "express";

// Local
import tokenController from "../controllers/token.js";

class TokenRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/refresh", tokenController.refresh);

        this.router.get("/check", tokenController.check);
    }
}

export default new TokenRoute();
