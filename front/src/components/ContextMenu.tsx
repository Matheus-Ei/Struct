// Libraries
import clsx from "clsx";
import { useCallback, useEffect, useRef } from "react";

interface ContextMenuProps {
    children: JSX.Element;
    onClose: () => void;
    position: { x: number; y: number };
    show: boolean;
    translateY?: boolean;
    className?: string;
}

const ContextMenu = ({
    children,
    show,
    onClose,
    position,
    translateY,
    className,
}: ContextMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, handleClickOutside]);

    if (!show) return null;

    const defaultCss = clsx(
        "fixed p-[10px] z-50",
        "flex flex-col items-center justify-center",
        "bg-base-100 border rounded-btn border-primary"
    );
    const css = className ? className : defaultCss;
    const translation = translateY
        ? "translate(0%, -100%)"
        : "translate(0%, 0%)";

    return (
        <div
            ref={menuRef}
            className={css}
            style={{
                top: position.y,
                left: position.x,
                transform: translation,
            }}
        >
            {children}
        </div>
    );
};

export default ContextMenu;
