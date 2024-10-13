// Libraries
import { Router } from "express";

// Controllers
import ProjectController from "../controllers/project.js";

class ProjectRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get-all", ProjectController.getAll);
    }
}

export default new ProjectRoute();
