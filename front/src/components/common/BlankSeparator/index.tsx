// Modules
import * as S from "./styles";
import * as T from "./types";

// Libraries
import React from "react";

const BlankSeparator = ({
    size,
    direction,
}: T.BlankSeparatorProps): JSX.Element => {
    const style = S.getStyle(direction, size);

    return <div style={style}></div>;
};

export default React.memo(BlankSeparator);
