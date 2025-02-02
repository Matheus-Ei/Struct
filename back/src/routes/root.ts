// Libraries
import { Request, Response, Router } from 'express';

class RootRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  notFound(req: Request, res: Response) {
    res.status(404).send({
      message: 'Endpoint not found',
    });
  }

  private init() {
    this.router.get('/*', this.notFound);
  }
}

export default new RootRoute();
