import { Request, Response } from 'express';

class UserController {
    public get(req: Request, res: Response) {
        const { id } = req.params;
        res.send('The user id is ' + id);
    }

    public register(req: Request, res: Response) {

    }

    public login(req: Request, res: Response) {

    }

    public pay(req: Request, res: Response) {

    }

    public cancelSubscription(req: Request, res: Response) {

    }
}

export default new UserController();
