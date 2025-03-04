// Local
import Request from 'modules/Request';
import { idType } from 'types/global';

class NotePage {
  public static async addNode(pageId: idType, prevNodeId?: idType) {
    try {
      const response = await Request.post('page/note', {
        pageId,
        prevNodeId,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async editNode(
    nodeId: idType,
    metadata?: string,
    content?: string,
    type?: string,
  ) {
    try {
      const response = await Request.patch(`page/note/${nodeId}`, {
        metadata,
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

  public static async moveNode(nodeId: idType, arrivalPrevNodeId: idType) {
    try {
      const response = await Request.patch(
        `page/note/${nodeId}/${arrivalPrevNodeId}`,
      );

      return response;
    } catch {
      return false;
    }
  }
}

export default NotePage;
