import Point from "components/Point";

interface InformationProps {
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
}

const getModulesIcons = (module: string) => {
    switch (module) {
        case "Notes":
            return ["CiStickyNote", "ci"];

        case "Calendar":
            return ["FaRegCalendarAlt", "fa"];

        case "List":
            return ["IoListOutline", "io5"];

        default:
            return ["", ""];
    }
};

const getTypeIcons = (type: string) => {
    switch (type) {
        case "Singular":
            return ["CiFileOn", "ci"];

        case "Compost":
            return ["MdOutlineSpaceDashboard", "md"];

        case "Monopage":
            return ["SiMonoprix", "si"];

        default:
            return ["", ""];
    }
};

const getModules = ({ type, modules }: InformationProps) => {
    const [icon, library] = getModulesIcons(modules[0]);

    switch (type) {
        case "Singular":
            return <Point text={modules[0]} icon={icon} library={library} />;

        case "Monopage":
            return <Point text={modules[0]} icon={icon} library={library} />;

        case "Compost":
            return (
                <div className="ml-2 flex flex-row items-start justify-center gap-2">
                    {modules.map((item, index) => {
                        const [icon, library] = getModulesIcons(item);
                        return (
                            <Point icon={icon} library={library} key={index} />
                        );
                    })}
                </div>
            );
    }
};

const Information = ({ type, modules }: InformationProps) => {
    const [icon, library] = getTypeIcons(type);

    return (
        <div className="flex flex-col items-start justify-end w-fit text-sm font-bold">
            <Point text={type} icon={icon} library={library} />
            {getModules({ type, modules })}
        </div>
    );
};

export default Information;
