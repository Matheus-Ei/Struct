// Library
import { createContext } from 'react';

export interface ProjectsContextType {
  refetch: () => void;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined,
);
