// Libraries
import { Router } from "express";

// Local
import notesPageController from "../../../controllers/page/modules/notes.js";

class NotesPageRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/:id", notesPageController.get);
        this.router.patch("/set/:id", notesPageController.set);
    }
}

export default new NotesPageRoute();
