// Libraries
import { Router } from 'express';

// Local
import notePageController from '../../../controllers/page/modules/note';

class NotePageRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', notePageController.newNode);
    this.router.delete('/:nodeId', notePageController.deleteNode);
    this.router.patch('/:nodeId', notePageController.updateNode);
    this.router.patch('/:nodeId/:arrivalPrevNodeId', notePageController.moveNode);
  }
}

export default new NotePageRoute();
