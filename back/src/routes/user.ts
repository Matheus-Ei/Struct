import { Router } from "express";
import UserController from "../controllers/user.js";

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get", UserController.get);

        this.router.get("/projects", UserController.getProjects);

        this.router.post("/register", UserController.register);

        this.router.post("/login", UserController.login);

        this.router.post("/logout", UserController.logout);

        this.router.post("/check/nickname", UserController.nicknameIsAvalaible);
        this.router.post("/check/mail", UserController.mailIsAvalaible);
    }
}

export default new UserRoute();
