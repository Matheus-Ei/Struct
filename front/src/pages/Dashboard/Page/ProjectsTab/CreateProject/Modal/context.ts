// Library
import { InputStateType } from 'hooks/useInputState';
import { createContext } from 'react';

// Local
import { SetStateType } from 'types/global';

export interface CreateProjectContextType {
  title: InputStateType<string>;
  description: InputStateType<string>;
  setModal: SetStateType<boolean>;
}

export const CreateProjectContext = createContext<
  CreateProjectContextType | undefined
>(undefined);
