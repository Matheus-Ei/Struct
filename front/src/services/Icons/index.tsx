import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    style?: Object;
}

const Icons = ({ library, name, style }: IconsProps) => {
    const repository: any = lib[library];
    const RequiredIcon = repository[name];

    return <RequiredIcon style={style} />;
};

export default Icons;
