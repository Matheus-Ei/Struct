import { Request, Response } from "express";
import PageModel from "../../models/page";

class PageGeralController {
    public async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const page = await PageModel.findByPk(id);

            if (!page) {
                res.status(404).send({
                    message: "The page don't exist, so don's deleted",
                });
                return;
            }

            page.destroy();

            res.status(200).send({ message: "The page was deleted" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting the page", error });
        }
    }
}

export default new PageGeralController();
