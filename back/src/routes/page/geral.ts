import { Router } from "express";
import PageGeralController from "../../controllers/page/geral";

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

        this.router.patch("/edit/name/:id", PageGeralController.editName);
        this.router.patch("/edit/description/:id", PageGeralController.editDescription);
        this.router.patch("/edit/emoji/:id", PageGeralController.editEmoji);
    }
}

export default new PageGeralRoute();
