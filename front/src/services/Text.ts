class Text {
    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    bold(): string {
        return `**${this.text}**`
    }

    italic(): string {
        return `*${this.text}*`
    }

    codeBlock(): string {
        return "```" + this.text + "```"
    }

    size(size: number): string {
        return ``
    }

    color(color: string): string {
        return ``
    }

    link(source: string): string {
        return ``
    }
}

export default Text;
