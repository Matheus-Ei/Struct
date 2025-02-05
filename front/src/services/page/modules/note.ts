// Local
import Request from 'modules/Request';
import { idType } from 'types/global';

class NotePage {
  public static async addNode(pageId: idType, position: number) {
    try {
      const response = await Request.post('page/note', {
        pageId,
        position,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async editNode(
    nodeId: idType,
    metadata?: string,
    position?: number,
    content?: string,
    type?: string,
  ) {
    try {
      const response = await Request.patch(`page/note/${nodeId}`, {
        metadata,
        position,
        content,
        type,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async deleteNode(nodeId: idType) {
    try {
      const response = await Request.delete(`page/note/${nodeId}`);

      return response;
    } catch {
      return false;
    }
  }
}

export default NotePage;
