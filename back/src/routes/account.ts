// Librareis
import { Router } from 'express';

// Local
import accountController from '../controllers/account';

class AccountRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', accountController.getCurrent);
    this.router.post('/', accountController.register);
    this.router.patch('/', accountController.update);
    this.router.delete('/', accountController.delete);

    this.router.post('/auth', accountController.login);
    this.router.delete('/auth', accountController.logout);
  }
}

export default new AccountRoute();
