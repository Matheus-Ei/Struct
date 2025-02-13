// Libraries
import { Request, Response } from 'express';
import Upload from '../services/upload';

class UploadController {
  public async get(req: Request, res: Response) {
    const { type, fileName } = req.params;

    if (type === 'image') {
      res.setHeader('Content-Type', 'image/jpeg');
    }

    const file = await Upload.get(fileName);

    try {
      res.status(201).send(file);
    } catch (error) {
      res.status(500).json({
        message: 'Error getting the upload',
        error,
      });
    }
  }

  public async make(req: Request, res: Response) {
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: 'Nenhum arquivo foi enviado.' });
      return;
    }

    try {
      const savedPath = Upload.make(file);

      res.status(201).json({
        message: 'File uploaded successfuly',
        data: { fileName: savedPath },
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error making the upload of the file',
        error,
      });
    }
  }

  public async delete(req: Request, res: Response) {
    const { fileName } = req.params;

    Upload.delete(fileName);

    try {
      res.status(201).json({ message: 'The file was deleted' });
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting the upload',
        error,
      });
    }
  }
}

export default new UploadController();
