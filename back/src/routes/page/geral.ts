// Libraries
import { Router } from "express";

// Local
import PageGeralController from "../../controllers/page/geral.js";

class PageGeralRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/:id", PageGeralController.getPage);
        this.router.get("/children/:id", PageGeralController.getChildren);
        this.router.post("/create", PageGeralController.create);
        this.router.delete("/:id", PageGeralController.delete);
        this.router.patch("/edit/:id", PageGeralController.edit);
    }
}

export default new PageGeralRoute();
