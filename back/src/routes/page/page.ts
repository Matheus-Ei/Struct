// Libraries
import { Router } from "express";

// Local
import pageController from "../../controllers/page/page.js";

class PageRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", pageController.create);
        this.router.get("/:id", pageController.get);
        this.router.delete("/:id", pageController.delete);
        this.router.patch("/:id", pageController.edit);
        this.router.get("/:id/children", pageController.children);
    }
}

export default new PageRoute();
