// Libraries
import { useQuery } from 'react-query';

// Local
import { idType } from 'types/global';
import ProjectShare from '.';

export function useProjectShare(id?: idType) {
  return useQuery(['project-accounts', id], () => ProjectShare.get(id), {
    enabled: !!id,
  });
}
