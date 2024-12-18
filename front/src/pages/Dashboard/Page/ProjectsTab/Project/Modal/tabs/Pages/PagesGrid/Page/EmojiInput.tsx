// Local
import Emoji from "components/Emoji";
import Page from "services/page";

interface EmojiInputProps {
    pageId: number;
    emoji: string | undefined;
}

const EmojiInput = ({ pageId, emoji }: EmojiInputProps) => {
    const updateEmoji = (newEmoji?: string | null) => {
        if (!newEmoji) return;

        Page.edit(pageId, undefined, undefined, newEmoji);
    };

    return (
        <Emoji
            symbol={emoji}
            className="text-xl"
            selectorOnClick={true}
            onUpdate={updateEmoji}
        />
    );
};

export default EmojiInput;
