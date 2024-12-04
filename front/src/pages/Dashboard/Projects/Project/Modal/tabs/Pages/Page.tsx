// Library
import clsx from "clsx";

// Components
import EditableField from "components/EditableField";
import Emoji from "components/Emoji";

// Local
import useToggle from "hooks/useToggle";
import { MouseEvent, useState } from "react";
import ContextPageMenu from "./ContextPageMenu";
import PageService from "services/page";

interface PageProps {
    id: number;
    name: string;
    emoji: string;
    refetch: () => void;
}

const cssNameEditing = clsx(
    "w-fit px-1",
    "text-md text-base-content cursor-text",
    "outline-none bg-base-200 rounded-btn"
);
const cssNameNotEditing = clsx(
    "w-full px-1 line-clamp-1 select-none",
    "text-md text-base-content cursor-pointer",
    "outline-none bg-base-100 rounded-btn"
);

const Page = ({ id, name, emoji, refetch }: PageProps) => {
    const [showMenu, toggleShowMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const handleContextMenu = (event: MouseEvent) => {
        event?.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleShowMenu(true);
    };

    const updateEmoji = (newEmoji?: string | null) => {
        if (!newEmoji) return;

        PageService.edit(id, undefined, undefined, newEmoji);
    };

    const updateName = async (value: string) => {
        if (!value) return;

        await PageService.edit(id, value, undefined, undefined);
    };

    return (
        <div
            className="flex gap-x-4 items-center"
            onContextMenu={handleContextMenu}
        >
            <Emoji
                symbol={emoji}
                className="cursor-pointer select-none text-xl"
                selectorOnClick={true}
                onUpdate={updateEmoji}
            />

            <EditableField
                defaultValue={name}
                onUpdate={updateName}
                classNameEditing={cssNameEditing}
                classNameNotEditing={cssNameNotEditing}
            />

            <ContextPageMenu
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                clickPosition={clickPosition}
                pageId={id}
                refetch={refetch}
            />
        </div>
    );
};

export default Page;
