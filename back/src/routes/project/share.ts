// Libraries
import { Router } from "express";

// Local
import shareController from "../../controllers/project/share.js";

class ShareRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/:id", shareController.get);
        this.router.post("/:id", shareController.share);
    }
}

export default new ShareRoute();
