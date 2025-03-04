// Libraries
import { createContext } from 'react';

// Local
import { ObjectState } from 'types/global';

export interface SignUpContextType {
  step: ObjectState<number>;

  name: ObjectState<string | undefined>;
  mail: ObjectState<string | undefined>;
  nickname: ObjectState<string | undefined>;
  password: ObjectState<string | undefined>;
  rePassword: ObjectState<string | undefined>;

  error: ObjectState<string | null>;
}

export const SignUpContext = createContext<SignUpContextType | undefined>(
  undefined,
);
