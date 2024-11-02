import { Router } from "express";
import PageGeralController from "../../controllers/page/geral";

class PageGeralRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.delete("/:id", PageGeralController.delete);
    }
}

export default new PageGeralRoute();
