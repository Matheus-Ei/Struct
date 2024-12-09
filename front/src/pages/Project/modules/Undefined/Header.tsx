// Libraries
import { useEffect, useState } from "react";

// Local
import { ProjectContext } from "pages/Project";
import EditableField from "components/EditableField";
import Emoji from "components/Emoji";
import Page from "services/page";
import useDefinedContext from "hooks/useDefinedContext";

const Header = () => {
    const { page, selectedPage, menu } = useDefinedContext(ProjectContext);
    const [emoji, setEmoji] = useState<string | undefined>();

    useEffect(() => {
        setEmoji(page.data?.emoji);
    }, [page.data?.emoji]);

    const updateEmoji = async (newEmoji?: string | null) => {
        if (!selectedPage?.id) return;

        await Page.edit(selectedPage.id, undefined, undefined, newEmoji);

        menu.refetch();
    };

    const updateName = async (value: string) => {
        if (!selectedPage?.id) return;

        await Page.edit(selectedPage.id, value, undefined, undefined);

        menu.refetch();
    };

    const updateDescription = async (value: string) => {
        if (!selectedPage?.id) return;

        await Page.edit(selectedPage.id, undefined, value, undefined);
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
                    defaultValue={page.data?.name}
                    onUpdate={updateName}
                />
            </div>

            <EditableField
                defaultValue={page.data?.description}
                onUpdate={updateDescription}
            />
        </div>
    );
};

export default Header;
