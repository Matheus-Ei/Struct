// Local
import Request from 'modules/Request';

class Upload {
  static async make(data: File) {
    try {
      const response = await Request.postFile('upload', data);

      return response.data.fileName;
    } catch {
      return null;
    }
  }

  static async delete(fileName: string) {
    try {
      await Request.delete(`upload/${fileName}`);

      return false;
    } catch {
      return false;
    }
  }

  static async get(fileName: string, type: 'image' = 'image') {
    try {
      const upload = await Request.get(
        `upload/${type}/${fileName}`,
        undefined,
        'blob',
      );
      return upload;
    } catch {
      return null;
    }
  }
}

export default Upload;
