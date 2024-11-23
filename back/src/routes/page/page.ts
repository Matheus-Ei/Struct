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
        this.router.get("/:id", pageController.get);
        this.router.get("/all/:projectId", pageController.getAll);
        this.router.get("/:id/children", pageController.children);

        this.router.post("/", pageController.create);
        this.router.delete("/:id", pageController.delete);
        this.router.patch("/:id", pageController.edit);
    }
}

export default new PageRoute();
