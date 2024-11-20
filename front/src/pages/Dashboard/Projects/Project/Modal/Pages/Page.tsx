// Local
import clsx from "clsx";
import EditableField from "components/EditableField";
import Emoji from "components/Emoji";
import EmojiSelector from "components/EmojiSelector";
import { EmojiClickData } from "emoji-picker-react";
import useToggle from "hooks/useToggle";
import { useEffect, useState } from "react";
import Request from "services/Request";
import ContextPageMenu from "./ContextPageMenu";

interface PageProps {
    id: number;
    name: string;
    emoji: string;
    refetch: () => void;
}

const Page = ({ id, name, emoji, refetch }: PageProps) => {
    const [showEmojiSelector, toggleEmojiSelector] = useToggle(false);
    const [newEmoji, setEmoji] = useState<EmojiClickData | undefined>();
    const [defaultEmoji, setDefauldEmoji] = useState<string | null>();

    const [showMenu, toggleShowMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const onContextMenu = (event: any) => {
        event?.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleShowMenu(true);
    };

    useEffect(() => {
        setDefauldEmoji(emoji);
    }, [emoji]);

    useEffect(() => {
        if (!newEmoji) return;

        Request.patch(`page/geral/edit/${id}`, {
            emoji: newEmoji.emoji,
        }).then(() => setDefauldEmoji(newEmoji.emoji));
    }, [newEmoji, id]);

    const updateName = async (value: string) => {
        await Request.patch(`page/geral/edit/${id}`, {
            name: value,
        });
    };

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

    return (
        <div
            className="flex gap-x-4 items-center"
            onContextMenu={onContextMenu}
        >
            <Emoji
                symbol={defaultEmoji}
                className="cursor-pointer select-none scale-125"
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
