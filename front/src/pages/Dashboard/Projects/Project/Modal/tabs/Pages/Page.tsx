// Library
import clsx from "clsx";

// Components
import EditableField from "components/EditableField";
import EmojiSelector from "components/Emoji/Selector";
import Emoji from "components/Emoji";

// Local
import useToggle from "hooks/useToggle";
import { EmojiClickData } from "emoji-picker-react";
import { MouseEvent, useEffect, useState } from "react";
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
    const [showEmojiSelector, toggleEmojiSelector] = useToggle(false);
    const [newEmoji, setEmoji] = useState<EmojiClickData | undefined>();
    const [defaultEmoji, setDefauldEmoji] = useState<string | null>();

    const [showMenu, toggleShowMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const handleContextMenu = (event: MouseEvent) => {
        event?.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleShowMenu(true);
    };

    // Set default emoji on first render
    useEffect(() => {
        setDefauldEmoji(emoji);
    }, [emoji]);

    // Update emoji when newEmoji is set
    useEffect(() => {
        if (!newEmoji) return;

        PageService.edit(id, undefined, undefined, newEmoji.emoji, () =>
            setDefauldEmoji(newEmoji.emoji)
        );
    }, [newEmoji, id]);

    const updateName = async (value: string) => {
        await PageService.edit(id, value, undefined, undefined, () => {});
    };

    return (
        <div
            className="flex gap-x-4 items-center"
            onContextMenu={handleContextMenu}
        >
            <Emoji
                symbol={defaultEmoji}
                className="cursor-pointer select-none text-xl"
                onClick={() => toggleEmojiSelector()}
            />
            <EditableField
                defaultValue={name}
                onUpdate={updateName}
                classNameEditing={cssNameEditing}
                classNameNotEditing={cssNameNotEditing}
            />

            <EmojiSelector
                setEmoji={setEmoji}
                toggleShow={toggleEmojiSelector}
                show={showEmojiSelector}
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
