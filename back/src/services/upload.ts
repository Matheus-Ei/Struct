// Library
import multer from 'multer';
import fs from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

// Settings
dotenv.config();
// const UPLOADS_PATH = `../../${process.env.UPLOADS_PATH}` || '../../uploads';
const UPLOADS_PATH = process.env.UPLOADS_PATH || './uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(UPLOADS_PATH)) {
      fs.mkdirSync(UPLOADS_PATH, { recursive: true });
    }
    cb(null, UPLOADS_PATH);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });

class Upload {
  static make(file: Express.Multer.File) {
    return file.filename;
  }

  static delete(fileName: string) {
    try {
      const absolutePath = path.join(UPLOADS_PATH, fileName);

      if (fs.existsSync(absolutePath)) {
        fs.unlinkSync(absolutePath);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting the file:', error);
      return false;
    }
  }

  static async get(fileName: string): Promise<Buffer | null> {
    const filePath = path.join(UPLOADS_PATH, fileName);

    try {
      if (fs.existsSync(filePath)) {
        const fileBuffer = await readFile(filePath);
        return fileBuffer;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error reading the file', error);
      return null;
    }
  }
}

export default Upload;
