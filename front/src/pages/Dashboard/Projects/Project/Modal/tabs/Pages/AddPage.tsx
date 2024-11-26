// Library
import { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

// Components
import Emoji from "components/Emoji";
import EmojiSelector from "components/Emoji/Selector";
import Input from "components/Input";
import Point from "components/Point";

// Other Locals
import useToggle from "hooks/useToggle";
import Page from "services/page";

interface AddPageProps {
    projectId: number;
    refetch: () => void;
}

const AddPage = ({ projectId, refetch }: AddPageProps) => {
    const [emoji, setEmoji] = useState<EmojiClickData | undefined>(undefined);
    const [showEmoji, toggleShowEmoji] = useToggle(false);

    const [title, setTitle] = useState<string>("");

    const createPage = async () =>
        title &&
        (await Page.create(title, emoji?.emoji, projectId, null, refetch));

    return (
        <div className="flex items-center justify-center absolute bottom-3 left-5">
            <div className="flex items-center justify-center gap-x-4 mr-8">
                <Input
                    text="Title"
                    className="border-b border-neutral px-2 pb-1 outline-none bg-base-100"
                    setValue={setTitle}
                    onEnter={createPage}
                />

                <Emoji
                    symbol={emoji?.emoji}
                    onClick={() => toggleShowEmoji()}
                    className="cursor-pointer select-none scale-125 py-1 px-2"
                />
            </div>

            <Point icon="FaPlus" library="fa6" onClick={createPage} />

            <EmojiSelector
                show={showEmoji}
                setEmoji={setEmoji}
                toggleShow={toggleShowEmoji}
                position={{ x: 80, y: -470 }}
            />
        </div>
    );
};

export default AddPage;
