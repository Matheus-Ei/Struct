// Libraries
import { Dispatch, SetStateAction } from "react";

export interface PageProps {
    selectedName: string;
}

export type SingleRouteType = [string, string, string, () => JSX.Element];
export type RoutesType = Array<SingleRouteType>;
