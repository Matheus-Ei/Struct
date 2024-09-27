import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    style?: Object;
    color?: string;
    size?: number;
}

const Icons = ({ library, name, style, color, size }: IconsProps) => {
    const repository: any = lib[library];
    const RequiredIcon = repository[name];

    return <RequiredIcon style={style} color={color} size={size}/>;
};

export default Icons;
