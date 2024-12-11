// Libraries
import { Dispatch, SetStateAction } from "react";

export interface ErrorType {
    message: string;
    isError: boolean;
}

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export type ElementType = JSX.Element | null;

export interface ErrorResponseType {
    message: string;
    error: string;
    details?: string;
}

export interface SuccessResponseType<T = undefined> {
    message: string;
    data: T;
}

export interface IconType {
    name: string;
    library: string;
}
