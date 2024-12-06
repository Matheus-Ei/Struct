// Librareis
import { Router } from "express";

// Local
import userController from "../controllers/user";

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/", userController.get);
        this.router.post("/", userController.register);

        this.router.post("/auth", userController.login);
        this.router.delete("/auth", userController.logout);
    }
}

export default new UserRoute();
