// Libraries
import { useCallback, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

// Local
import Event from "modules/Event";

interface ContextMenuProps {
    children: JSX.Element;
    onClose: () => void;
    show: boolean;
    position: { x: number; y: number };
    isAbsolute?: boolean;
    isTranslateY?: boolean;
    className?: string;
}

const ContextMenu = ({
    children,
    onClose,
    show,
    position,
    isAbsolute,
    isTranslateY,
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
        Event.addListener("mousedown", handleClickOutside);

        return () => Event.removeListener("mousedown", handleClickOutside);
    }, [onClose, handleClickOutside]);

    if (!show) return null;

    const css = twMerge(
        "p-[10px] z-50",
        "flex flex-col items-center justify-center",
        "bg-base-100 border rounded-btn border-primary",
        className
    );

    const translation = isTranslateY
        ? "translate(0%, -100%)"
        : "translate(0%, 0%)";
    const positionCss = isAbsolute ? "absolute" : "fixed";

    return (
        <div
            ref={menuRef}
            className={css}
            style={{
                top: position.y,
                left: position.x,
                position: positionCss,
                transform: translation,
            }}
        >
            {children}
        </div>
    );
};

export default ContextMenu;
