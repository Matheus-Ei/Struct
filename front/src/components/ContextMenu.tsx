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
    onClose,
    position,
    show,
    className,
}: ContextMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (!show) {
        return null;
    }

    return (
        <div
            ref={menuRef}
            className={
                className
                    ? className
                    : "flex flex-col items-center justify-center fixed p-[10px] bg-base-100 border rounded-btn border-primary z-50"
            }
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
