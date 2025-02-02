// Local
import Request from 'modules/Request';
import { idType } from 'types/global';

class Project {
  public static async get(id: idType) {
    try {
      const response = await Request.get(`project/${id}`);
      return response.data;
    } catch {
      return null;
    }
  }

  public static async getAll() {
    try {
      const response = await Request.get('project');
      return response.data;
    } catch {
      return null;
    }
  }

  public static async create(title: string, description: string) {
    try {
      const response = await Request.post('project', {
        title,
        description,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async edit(
    id: idType,
    title: string | undefined,
    description: string | undefined,
  ) {
    try {
      const response = await Request.patch(`project/${id}`, {
        title,
        description,
      });

      return response;
    } catch {
      return false;
    }
  }

  public static async delete(id: idType) {
    try {
      const response = await Request.delete(`project/${id}`);

      return response;
    } catch {
      return false;
    }
  }
}

export default Project;
