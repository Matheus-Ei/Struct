export class TextCategory {
    private readLines(item: string, index: number) {
        const titleRegex = /^# (.+)/;
        const paragraphRegex = /^#p\s+(.+)/;

        /*         if (titleRegex.test(item)) {
            return this.getTitle(item);
        } else if (paragraphRegex.test(item)) {
            return this.getParagraph(item);
        } */

        return `<p>${item}<p>`;
    }

    set(values: Array<string>) {
        return values;
    }
}

export class Text {
    private endblock: string;

    constructor() {
        this.endblock = ";;;";
    }

    private getTitle(text: string) {
        return `<h1 class="text-4xl font-bold">${text}</h1>`;
    }

    private getParagraph(text: string) {
        return `<p class="text-lg">${text}</p>`;
    }

    private readLines(item: string, index: number) {
        const titleRegex = /^# (.+)/;
        const paragraphRegex = /^#p\s+(.+)/;

        if (titleRegex.test(item)) {
            return this.getTitle(item);
        } else if (paragraphRegex.test(item)) {
            return this.getParagraph(item);
        }

        return `<p>${item}<p>`;
    }

    public render(value: Array<string>) {
        let processed: string = "";

        value.forEach(
            (item: string, index: number) =>
                (processed = processed + this.readLines(item, index))
        );

        return processed;
    }
}
