class Regex {
    // Check if there are regex that identifies the type, returns the type
    public checkType(text: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(text)) return "title1";
        else if (title2.test(text)) return "title2";
        else if (title3.test(text)) return "title3";

        return false;
    }

    // Remove the regex that identifies the type
    public removeType(text: string) {
        const title1 = /^#\s/;
        const title2 = /^##\s/;
        const title3 = /^###\s/;

        if (title1.test(text)) return text.replace(title1, "");
        else if (title2.test(text)) return text.replace(title2, "");
        else if (title3.test(text)) return text.replace(title3, "");

        return text;
    }

    // Replace inline styles with their correspondents in html
    public replaceStyle(text: string) {
        const bold = /\*\*(.*?)\*\*/g;

        if (bold.test(text)) return text.replace(bold, "<strong>$1</strong>");

        return text;
    }
}

// const type = this.regex.checkType(text);
// const styledText = this.regex.replaceStyle(text);
// const returnText = this.regex.removeType(styledText);

export default Regex;
