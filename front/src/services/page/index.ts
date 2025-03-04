// Local
import { PageType } from './types';
import Request from 'modules/Request';
import { idType } from 'types/global';

class Page {
  public static async get(id: idType) {
    try {
      const response = await Request.get(`page/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }

  public static async getAll(projectId: idType): Promise<PageType[] | null> {
    try {
      if (!projectId) return null;

      const response = await Request.get(`project/${projectId}/pages`);
      return response.data;
    } catch {
      return null;
    }
  }

  public static async create(
    title: string,
    emoji: string | undefined | null,
    projectId: idType,
    parentPage: idType,
  ) {
    try {
      const response = await Request.post('page', {
        title,
        emoji,
        description: 'Page description...',
        projectId,
        parentPage,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async edit(
    id: idType,
    title: string | undefined | null,
    description: string | undefined | null,
    emoji: string | undefined | null,
  ) {
    try {
      const response = await Request.patch(`page/${id}`, {
        title,
        description,
        emoji,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async delete(id: idType) {
    try {
      const response = await Request.delete(`page/${id}`);

      return response;
    } catch {
      return false;
    }
  }

  public static async setModule(id: idType, module: string) {
    try {
      const response = await Request.patch(`page/${id}/module`, {
        module,
      });

      return response;
    } catch {
      return false;
    }
  }
}

export default Page;
