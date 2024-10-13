// Modules
import * as S from "./styles";
import * as T from "./types";

const BlankSeparator = ({
    size,
    direction,
}: T.BlankSeparatorProps)=> {
    const style = S.getStyle(direction, size);

    return <div style={style}></div>;
};

export default BlankSeparator;
