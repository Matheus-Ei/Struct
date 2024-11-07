import Emoji from "components/Emoji";
import EmojiSelector from "components/EmojiSelector";
import { EmojiClickData } from "emoji-picker-react";
import useRequest from "hooks/useRequest";
import useToggle from "hooks/useToggle";
import { PagesRequestType } from "pages/Project/util/types";
import { useEffect, useState } from "react";
import Request from "services/Request";
import EditableField from "./EditableField";
import SearchElement from "./SearchElement";

interface UndefinedProps {
    pageId: number;
    refetchPage: () => void;
}

const Undefined = ({ pageId, refetchPage }: UndefinedProps) => {
    const [emoji, setEmoji] = useState<EmojiClickData | undefined>();
    const [showEmojiSelector, toggleShowEmojiSelector] = useToggle(false);

    const { response } = useRequest<PagesRequestType>(`page/geral/${pageId}`);

    // Updates the emoji on the database
    useEffect(() => {
        if (emoji) {
            Request.patch(`page/geral/edit/emoji/${pageId}`, {
                emoji: emoji.emoji,
            });
        }
    }, [emoji, pageId]);

    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
            <EmojiSelector
                setEmoji={setEmoji}
                show={showEmojiSelector}
                toggleShow={toggleShowEmojiSelector}
            />

            <div className="flex flex-row gap-4 w-full text-start text-4xl">
                <div onClick={() => toggleShowEmojiSelector()}>
                    <Emoji symbol={emoji ? emoji.emoji : response?.emoji} />
                </div>

                <EditableField
                    defaultValue={response?.name}
                    pageId={pageId}
                    type="name"
                    className="w-full text-start font-bold text-3xl"
                />
            </div>
            <EditableField
                defaultValue={response?.description}
                pageId={pageId}
                type="description"
                className="w-full text-start text-lg mb-10"
            />

            <SearchElement pageId={pageId} refetchPage={refetchPage} />
        </div>
    );
};

export default Undefined;
