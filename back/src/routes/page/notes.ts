import { Router } from "express";
import NotesPageController from "../../controllers/page/notes.js";

class NotesPageRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/:id", NotesPageController.get);
        this.router.patch("/set-module/:id", NotesPageController.setModule);
    }
}

export default new NotesPageRoute();
