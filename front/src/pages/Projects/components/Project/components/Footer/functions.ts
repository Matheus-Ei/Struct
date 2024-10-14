export const handleOpen = (projectId: number) => {};

export const handleDelete = (projectId: number) => {};

export const handleEdit = (projectId: number) => {};

export const getTypeIcon = (type: "Singular" | "Compost" | "Monopage") => {
    let icon: string = "FaQuestion";
    let library: string = "fa";

    switch (type) {
        case "Singular":
            icon = "GoSingleSelect";
            library = "go";
            break;

        case "Compost":
            icon = "RiCheckboxMultipleBlankFill";
            library = "ri";
            break;

        case "Monopage":
            icon = "SiPronounsdotpage";
            library = "si";
            break;
    }

    return [icon, library];
};

export const getModuleIcon = (moduleName: string) => {
    let name: string = "FaQuestion";
    let library: string = "fa";

    switch (moduleName) {
        case "Notes":
            name = "FaNoteSticky";
            library = "fa6";
            break;

        case "List":
            name = "FaListAlt";
            library = "fa";
            break;
    }

    return { name, library };
};
