import { Router } from "express";
import NotesPageController from "../../controllers/page/notes";

class NotesPageRoute {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get("/get/:id", NotesPageController.get);
        this.router.post("/create", NotesPageController.create);
    }
}

export default new NotesPageRoute();
