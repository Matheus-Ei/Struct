// Libraries
import { useContext, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

// Local
import Modal from "components/Modal";
import { ProjectContext } from "pages/Project";
import { useAllPages } from "services/page/usePage";
import { PageType } from "services/page/types";
import SearchBar from "components/SearchBar";
import Emoji from "components/Emoji";

const flattenPages = (pages?: PageType[] | null): PageType[] => {
    let result: PageType[] = [];

    pages?.forEach((page) => {
        result.push({
            id: page.id,
            name: page.name,
            emoji: page.emoji,
            description: page.description,
            module: page.module,
            children_pages: [],
        });

        if (page.children_pages) {
            result = result.concat(flattenPages(page.children_pages));
        }
    });

    return result;
};

const modalCss = clsx(
    "relative w-screen h-screen sm:w-[30vw] sm:h-[30rem] xl:w-[15vw] z-30",
    "flex flex-col items-start justify-start"
);

const pageCss = clsx(
    "w-full h-fit gap-x-2 rounded-btn py-2 px-4",
    "flex flex-row justify-start items-start text-start",
    "cursor-pointer select-none hover:bg-base-200"
);

interface SearchModalProps {
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}

const SearchModal = ({ isOpen, toggleOpen }: SearchModalProps) => {
    const useProjectContext = useContext(ProjectContext);

    // Fetch all pages and format them to be flat
    const { data: allPages, refetch: refetchPages } = useAllPages(
        useProjectContext?.projectId
    );
    const formattedPages = useMemo(() => flattenPages(allPages), [allPages]);

    const [pagesString, setPagesString] = useState<string[]>([]);

    // Set pages string when formatted pages change
    useEffect(() => {
        setPagesString(formattedPages.map((page) => page.name));
    }, [formattedPages]);

    // Refetch pages when modal is opened
    useEffect(() => {
        if (isOpen) refetchPages();
    }, [isOpen, refetchPages]);

    const renderPages = (page: PageType, index: number) => {
        if (!pagesString.includes(page.name)) return null;

        return (
            <div
                className={pageCss}
                key={index}
                onClick={() => {
                    useProjectContext?.selectedPage.set(page.id);
                    toggleOpen(false);
                }}
            >
                <Emoji symbol={page.emoji} />
                <h1 className="line-clamp-1 w-full text-sm">{page.name}</h1>
            </div>
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => toggleOpen(false)}
            className={modalCss}
        >
            <div className="w-5/6 h-5/6">
                <SearchBar
                    className="w-full h-9 pl-4 mb-2 outline-none border-b bg-base-100"
                    searchPlace={formattedPages.map((page) => page.name)}
                    placeholder="Search pages"
                    setResult={setPagesString}
                />

                <div className="flex flex-col w-full h-full items-start overflow-y-scroll">
                    {formattedPages.map(renderPages)}
                </div>
            </div>
        </Modal>
    );
};

export default SearchModal;
