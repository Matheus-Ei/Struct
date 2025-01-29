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
        this.router.get("/", userController.getCurrent);
        this.router.post("/", userController.register);
        this.router.patch("/", userController.update);
        this.router.put("/password", userController.changePassword);

        this.router.post("/auth", userController.login);
        this.router.delete("/auth", userController.logout);
    }
}

export default new UserRoute();
