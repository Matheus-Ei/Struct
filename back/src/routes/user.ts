// Libraries
import { Router } from "express";

// Controllers
import UserController from "../controllers/user";

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get", UserController.get);

        this.router.post("/register", UserController.register);

        this.router.post("/login", UserController.login);
    }
}

export default new UserRoute();
