// Libraries
import { Router } from "express";

// Local
import ProjectController from "../controllers/project.js";

class ProjectRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get/:id", ProjectController.get);
        this.router.get("/pages/:id", ProjectController.getPages);
        this.router.get("/shared/:id", ProjectController.getShared);

        this.router.post("/create", ProjectController.create);

        this.router.patch("/edit/:id", ProjectController.edit);

        this.router.delete("/delete/:id", ProjectController.delete);
    }
}

export default new ProjectRoute();
