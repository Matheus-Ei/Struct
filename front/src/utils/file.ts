class File {
    public static get(path: string) {
        return require(`../assets/${path}`);
    }
}

export default File;
