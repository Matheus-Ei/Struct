// Modules
import lib from "./library";
import * as I from "./interface";

const Icons = ({ library, name, color, size }: I.IconsProps) => {
    const repository: any = lib[library];

    try {
        const RequiredIcon = repository[name];

        return (
            <RequiredIcon
                className={`text-neutral-950 dark:text-neutral-50 text-${color}`}
                size={size}
            />
        );
    } catch (error) {
        console.error(error);

        const errorRepo: any = lib["fa6"];
        const RequiredIcon = errorRepo["FaQuestion"];

        return (
            <RequiredIcon
                className="text-neutral-950 dark:text-neutral-50"
                color={color}
                size={size}
            />
        );
    }
};

export default Icons;
