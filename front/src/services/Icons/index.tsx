// Modules
import lib from "./library";
import * as I from "./interface";

const Icons = ({ library, name, style, color, size }: I.IconsProps) => {
    const repository: any = lib[library];
    const RequiredIcon = repository[name];

    return <RequiredIcon style={style} color={color} size={size} />;
};

export default Icons;
