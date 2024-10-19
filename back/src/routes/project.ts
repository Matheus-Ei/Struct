// Libraries
import { Router } from "express";

// Controllers
import ProjectController from "../controllers/project";

class ProjectRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get/:id", ProjectController.get);

        this.router.post("/create", ProjectController.create);

        this.router.get("/get-all", ProjectController.getAll);

        this.router.put("/edit/:id", ProjectController.edit);

        this.router.delete("/delete/:id", ProjectController.delete);
    }
}

export default new ProjectRoute();
