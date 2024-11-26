// Libraries
import clsx from "clsx";
import Event from "modules/Event";
import { useCallback, useEffect, useRef } from "react";

interface ContextMenuProps {
    children: JSX.Element;
    onClose: () => void;
    position: { x: number; y: number };
    show: boolean;
    translateY?: boolean;
    className?: string;
}

const defaultCss = clsx(
    "fixed p-[10px] z-50",
    "flex flex-col items-center justify-center",
    "bg-base-100 border rounded-btn border-primary"
);

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
            if (!menuRef.current) return;

            Event.onClickCallback(
                onClose,
                !menuRef.current.contains(event.target as Node)
            );
        },
        [onClose]
    );

    // Close the context menu when clicking outside of it
    useEffect(() => {
        Event.addListener("contextmenu", handleClickOutside);

        return () => {
            Event.removeListener("contextmenu", handleClickOutside);
        };
    }, [onClose, handleClickOutside]);

    if (!show) return null;

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
