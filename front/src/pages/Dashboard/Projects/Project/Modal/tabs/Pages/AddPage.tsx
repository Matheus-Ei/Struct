// Library
import { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

// Components
import EmojiSelector from "components/Emoji/Selector";
import Emoji from "components/Emoji";
import Input from "components/Input";
import Point from "components/Point";

// Local
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
        <div className="flex items-center justify-center absolute bottom-2 right-2 gap-x-4">
            <Input
                text="Title"
                className="border-base-100 rounded-none border-b border-b-neutral m-0 h-8 px-2 pb-1 outline-none bg-base-100"
                setValue={setTitle}
                onEnter={createPage}
            />

            <Emoji
                symbol={emoji?.emoji}
                onClick={() => toggleShowEmoji()}
                className="scale-150 py-1 px-2"
            />

            <Point
                icon="FaPlus"
                library="fa6"
                onClick={createPage}
                className="ml-4"
            />

            <EmojiSelector
                show={showEmoji}
                setEmoji={setEmoji}
                toggleShow={toggleShowEmoji}
                position={{ x: -270, y: -470 }}
            />
        </div>
    );
};

export default AddPage;
