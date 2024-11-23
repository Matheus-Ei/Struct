// Librareis
import { Router } from "express";

// Local
import userController from "../controllers/user.js";

class UserRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", userController.register);
        this.router.get("/", userController.get);

        // Access
        this.router.post("/login", userController.login);
        this.router.post("/logout", userController.logout);

        // Auth
        this.router.post("/auth/google", userController.authGoogle);

        // Check availability
        this.router.post("/check/nickname", userController.nicknameIsAvalaible);
        this.router.post("/check/mail", userController.mailIsAvalaible);
    }
}

export default new UserRoute();
