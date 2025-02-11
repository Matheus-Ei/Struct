// Libraries
import { Router } from 'express';

// Local
import uploadController from '../controllers/upload';
import { upload } from '../services/upload';

class UploadRoute {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', upload.single('file'), uploadController.make);

    this.router.get('/:fileName', uploadController.get);
    this.router.delete('/:fileName', uploadController.delete);
  }
}

export default new UploadRoute();
