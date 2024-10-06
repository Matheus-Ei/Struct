import { Router } from "express";
import UserController from "../controllers/user.js";

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get/:id", UserController.get);

        this.router.post("/register", UserController.register);
    }
}

export default new UserRoute();
