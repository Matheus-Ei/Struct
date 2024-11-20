// Libraries
import clsx from "clsx";
import { useEffect, useRef } from "react";

interface ContextMenuProps {
    children: JSX.Element;
    onClose: () => void;
    position: { x: number; y: number };
    show: boolean;
    className?: string;
}

const ContextMenu = ({
    children,
    show,
    onClose,
    position,
    className,
}: ContextMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) =>
            menuRef?.current?.contains(event.target as Node) && onClose();

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (!show) return null;

    const defaultCss = clsx(
        "fixed p-[10px] z-50",
        "flex flex-col items-center justify-center",
        "bg-base-100 border rounded-btn border-primary"
    );
    const css = className ? className : defaultCss;

    return (
        <div
            ref={menuRef}
            className={css}
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(0%, -100%)",
            }}
        >
            {children}
        </div>
    );
};

export default ContextMenu;
