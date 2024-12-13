class Regex {
    public checkType(item: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) return "title1";
        else if (title2.test(item)) return "title2";
        else if (title3.test(item)) return "title3";

        return false;
    }

    public removeType(item: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(item)) return item.replace(title1, "");
        else if (title2.test(item)) return item.replace(title2, "");
        else if (title3.test(item)) return item.replace(title3, "");

        return item;
    }

    public replaceStyle(item: string) {
        const bold = /\*\*(.*?)\*\*/g;

        if (bold.test(item)) return item.replace(bold, "<strong>$1</strong>");

        return item;
    }
}

export default Regex;
