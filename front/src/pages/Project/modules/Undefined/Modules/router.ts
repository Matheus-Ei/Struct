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
        icon: "PiNoteBlankFill",
        library: "pi",
    },
];

export default modules;
