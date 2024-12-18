// Library
import { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

// Components
import CreateButton from "./CreateButton";
import NameInput from "./NameInput";

// Local
import Page from "services/page";
import EmojiInput from "./EmojiInput";

interface AddPageProps {
    projectId: number;
    refetch: () => void;
}

const AddPage = ({ projectId, refetch }: AddPageProps) => {
    const [emoji, setEmoji] = useState<EmojiClickData | undefined>(undefined);

    const [title, setTitle] = useState<string>("");

    const createPage = async () => {
        if (!title) return;
        await Page.create(title, emoji?.emoji, projectId, null);
        refetch();
    };

    return (
        <div className="flex items-center justify-center absolute bottom-2 right-2 gap-x-4">
            <NameInput setTitle={setTitle} onEnter={createPage} />

            <EmojiInput emoji={emoji} setEmoji={setEmoji} />

            <CreateButton onClick={createPage} />
        </div>
    );
};

export default AddPage;
