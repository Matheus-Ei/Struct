// Libraries
import { useContext, useEffect, useState } from "react";

// Local
import { ProjectContext } from "pages/Project";
import EditableField from "components/EditableField";
import Emoji from "components/Emoji";
import Page from "services/page";

const Header = () => {
    const useProjectContext = useContext(ProjectContext);
    const [emoji, setEmoji] = useState<string | undefined>();

    useEffect(() => {
        setEmoji(useProjectContext?.page.data?.emoji);
    }, [useProjectContext?.page.data?.emoji]);

    const updateEmoji = async (newEmoji?: string | null) => {
        if (!useProjectContext?.selectedPage?.id) return;

        await Page.edit(
            useProjectContext.selectedPage.id,
            undefined,
            undefined,
            newEmoji
        );
    };

    const updateName = async (value: string) => {
        if (!useProjectContext?.selectedPage?.id) return;

        await Page.edit(
            useProjectContext.selectedPage.id,
            value,
            undefined,
            undefined
        );
    };

    const updateDescription = async (value: string) => {
        if (!useProjectContext?.selectedPage?.id) return;

        await Page.edit(
            useProjectContext.selectedPage.id,
            undefined,
            value,
            undefined
        );
    };

    return (
        <div className="flex flex-col w-full h-1/6 items-start justify-center gap-y-3">
            <div className="flex flex-row gap-4 w-full text-start text-3xl">
                <Emoji
                    symbol={emoji}
                    selectorOnClick={true}
                    onUpdate={updateEmoji}
                />

                <EditableField
                    defaultValue={useProjectContext?.page.data?.name}
                    onUpdate={updateName}
                />
            </div>

            <EditableField
                defaultValue={useProjectContext?.page.data?.description}
                onUpdate={updateDescription}
            />
        </div>
    );
};

export default Header;
