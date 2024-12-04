interface ModuleType {
    name: string;
    description: string;
    url: string;
    icon: string;
    library: string;
}

const modules: Array<ModuleType> = [
    {
        name: "notes",
        description: "Module to create and manage notes.",
        url: "page/notes",
        icon: "IoMdDocument",
        library: "io",
    },
];

export default modules;
