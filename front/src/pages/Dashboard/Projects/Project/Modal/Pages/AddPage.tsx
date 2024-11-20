import Button from "components/Button";
import Emoji from "components/Emoji";
import EmojiSelector from "components/EmojiSelector";
import Input from "components/Input";
import { useState } from "react";
import { EmojiClickData } from "emoji-picker-react";
import useToggle from "hooks/useToggle";
import Request from "services/Request";

interface AddPageProps {
    projectId: number;
    refetch: () => void;
}

const AddPage = ({ projectId, refetch }: AddPageProps) => {
    const [emoji, setEmoji] = useState<EmojiClickData | undefined>(undefined);
    const [showEmoji, toggleShowEmoji] = useToggle(false);

    const [title, setTitle] = useState<string>("");

    const createPage = async () => {
        if (!title) return;
        const defaultData = {
            name: title,
            emoji: emoji?.emoji,
            description: "Page description...",
            projectId,
        };

        await Request.post("page/geral/create", defaultData);
        refetch();
    };

    return (
        <div className="flex items-center justify-center absolute bottom-3 left-5">
            <div className="flex items-center justify-center gap-x-4 mr-8">
                <Input
                    text="Title"
                    className="border border-neutral rounded-btn px-2 py-2 outline-none bg-base-100"
                    setValue={setTitle}
                    onEnter={createPage}
                />

                <Emoji
                    symbol={emoji?.emoji}
                    onClick={() => toggleShowEmoji()}
                    className="cursor-pointer select-none scale-150"
                />
            </div>

            <Button
                text="Add"
                className="bg-primary rounded-btn text-primary-content font-bold py-2 px-4"
                onClick={createPage}
            />

            <EmojiSelector
                show={showEmoji}
                setEmoji={setEmoji}
                toggleShow={toggleShowEmoji}
            />
        </div>
    );
};

export default AddPage;
