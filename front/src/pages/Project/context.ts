// Library
import { createContext } from 'react';

// Local
import { PageType } from 'services/page/types';
import { SetStateType } from 'types/global';

export interface ProjectContextType {
  projectId: string | undefined;
  menu: {
    tabs?: PageType[] | null;
    refetch: () => void;
  };
  page: {
    data?: PageType | null;
    refetch: () => void;
  };
  selectedPage: {
    id: number | null;
    set: SetStateType<number | null>;
  };
}

export const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined,
);
