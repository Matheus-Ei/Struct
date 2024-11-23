import { RefObject } from "react";

const getPosition = (reference: RefObject<HTMLDivElement>) => {
    if (!reference.current) return { top: 0, left: 0, right: 0, bottom: 0 };

    const { top, left, right, bottom } =
        reference.current.getBoundingClientRect();
    return { top, left, right, bottom };
};

export default getPosition;
