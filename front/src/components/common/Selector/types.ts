import React, { Dispatch, SetStateAction } from "react";

export interface SelectorProps {
    name: string;
    icon: string;
    repository: string;
    isSelected: boolean;
    setSelected: Dispatch<SetStateAction<string>>;
}
