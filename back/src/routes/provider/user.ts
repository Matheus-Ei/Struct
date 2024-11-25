// Librareis
import { Router } from "express";

// Local
import userProviderController from "../../controllers/provider/user.js";

class UserProviderRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/google", userProviderController.google);
    }
}

export default new UserProviderRoute();
