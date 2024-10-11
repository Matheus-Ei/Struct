// Modules
import * as T from "./types";

// Libraries
import React from "react";

const BlankSeparator = ({
    size,
    direction,
}: T.BlankSeparatorProps): JSX.Element => {
    let style: Object = {};

    if (direction === "horisontal") {
        style = { width: `${size}px` };
    } else {
        style = { height: `${size}px` };
    }

    return <div style={style}></div>;
};

export default React.memo(BlankSeparator);
