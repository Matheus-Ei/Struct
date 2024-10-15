// Libraries
import { Dispatch, SetStateAction } from "react";

export interface MenuProps {
    selectedName: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

export type SingleRouteType = [string, string, string, () => JSX.Element];
export type RoutesType = Array<SingleRouteType>;
