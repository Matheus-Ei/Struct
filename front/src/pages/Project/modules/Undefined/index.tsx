// Libraries
import { useContext, useEffect, useState } from "react";
import { EmojiClickData } from "emoji-picker-react";

// Local
import EmojiSelector from "components/EmojiSelector";
import { PagesContext } from "pages/Project";
import SearchElement from "./SearchElement";
import EditableField from "./EditableField";
import useToggle from "hooks/useToggle";
import Request from "modules/Request";
import Emoji from "components/Emoji";

const Undefined = () => {
    const [emoji, setEmoji] = useState<EmojiClickData | undefined>();
    const [showEmojiSelector, toggleShowEmojiSelector] = useToggle(false);

    const context = useContext(PagesContext);

    // Refetch the page data on load
    useEffect(() => {
        context?.refetchPage();
    }, [context?.refetchPage, context]);

    // Updates the emoji on the database
    useEffect(() => {
        if (emoji && context && context.page) {
            Request.patch(`page/geral/edit/${context.page.id}`, {
                emoji: emoji.emoji,
            });
        }
    }, [emoji, context?.page?.id, context]);

    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
            <EmojiSelector
                setEmoji={setEmoji}
                show={showEmojiSelector}
                toggleShow={toggleShowEmojiSelector}
            />

            <div className="flex flex-row gap-4 w-full text-start text-4xl">
                <button onClick={() => toggleShowEmojiSelector()}>
                    <Emoji
                        symbol={emoji ? emoji.emoji : context?.page?.emoji}
                    />
                </button>

                <EditableField
                    defaultValue={context?.page?.name}
                    pageId={context?.page?.id}
                    field="name"
                    className="w-full text-start font-bold text-3xl"
                />
            </div>

            <EditableField
                defaultValue={context?.page?.description}
                pageId={context?.page?.id}
                field="description"
                className="w-full text-start text-lg mb-10"
            />

            <SearchElement pageId={context?.page?.id} />
        </div>
    );
};

export default Undefined;
