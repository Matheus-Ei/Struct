class Theme {
    public static set(newTheme: string) {
        document.documentElement.setAttribute("data-theme", newTheme);
    }
}

export default Theme;
