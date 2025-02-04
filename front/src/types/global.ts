// Libraries
import { Dispatch, SetStateAction } from 'react';

export interface ErrorType {
  message: string;
  isError: boolean;
}

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type ElementType = JSX.Element | null;

export interface ErrorResponseType {
  message: string;
  error: string;
}

export interface SuccessResponseType<T = undefined> {
  message: string;
  data?: T;
}

export type idType = string | number | undefined | null;

export interface IconType {
  name: string;
  library: string;
}

export interface ObjectState<T> {
  value: T;
  set: SetStateType<T>;
}

export interface ObjectStateToggle {
  value: boolean;
  toggle: (value?: boolean) => void;
}
