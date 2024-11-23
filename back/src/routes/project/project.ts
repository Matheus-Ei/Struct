// Libraries
import { Router } from "express";

// Local
import projectController from "../../controllers/project/project.js";

class ProjectRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.post("/", projectController.create);

        this.router.get("/:id", projectController.get);
        this.router.get("/", projectController.getAll);

        this.router.patch("/:id", projectController.edit);
        this.router.delete("/:id", projectController.delete);
    }
}

export default new ProjectRoute();
