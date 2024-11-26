import { RefObject } from "react";

class Element {
    private element: HTMLElement | null;
    constructor(reference: RefObject<HTMLElement>) {
        this.element = reference.current ? reference.current : null;
    }

    get style() {
        return this.element?.style;
    }

    get className() {
        return this.element?.className;
    }

    get id() {
        return this.element?.id;
    }

    get innerHTML() {
        return this.element?.innerHTML;
    }

    get parent() {
        return this.element?.parentElement;
    }

    get children() {
        return this.element?.children;
    }

    get position() {
        return this.element?.getBoundingClientRect();
    }

    focus() {
        this.element?.focus();
    }
}

export default Element;
