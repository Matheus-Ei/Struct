interface ModuleType {
    name: string;
    description: string;
    icon: string;
    library: string;
}

const modules: Array<ModuleType> = [
    {
        name: "notes",
        description: "Module to create and manage notes.",
        icon: "IoMdDocument",
        library: "io",
    },
];

export default modules;
