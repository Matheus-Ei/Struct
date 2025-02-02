// Libraries
import { createContext } from 'react';

// Local
import { ErrorType, SetStateType } from 'types/global';

export interface SignUpContextType {
  step: number;
  setStep: SetStateType<number>;

  name: string;
  setName: SetStateType<string>;

  mail: string;
  setMail: SetStateType<string>;

  nickname: string;
  setNickname: SetStateType<string>;

  password: string;
  setPassword: SetStateType<string>;

  rePassword: string;
  setRePassword: SetStateType<string>;

  error: ErrorType;
  setError: SetStateType<ErrorType>;
}

export const SignUpContext = createContext<SignUpContextType | undefined>(
  undefined,
);
