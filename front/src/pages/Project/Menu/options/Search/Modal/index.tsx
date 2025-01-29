// Libraries
import { useEffect, useMemo, useState } from "react";

// Local
import Modal from "components/Modal";
import { ProjectContext } from "pages/Project/context";
import { useAllPages } from "services/page/usePage";
import { PageType } from "services/page/types";
import SearchBar from "components/SearchBar";
import useSafeContext from "hooks/useSafeContext";
import PagesLayout from "./PagesLayout";

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

interface SearchModalProps {
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}

const SearchModal = ({ isOpen, toggleOpen }: SearchModalProps) => {
    const { projectId, selectedPage } = useSafeContext(ProjectContext);

    // Fetch all pages and format them to be flat
    const { data: allPages, refetch: refetchPages } = useAllPages(projectId);
    const flatPages = useMemo(() => flattenPages(allPages), [allPages]);

    const [searchPages, setSearchPages] = useState<string[]>([]);

    // Set pages string when flat pages change
    useEffect(() => {
        setSearchPages(flatPages.map((page) => page.name));
    }, [flatPages]);

    // Refetch pages when modal is opened
    useEffect(() => {
        if (isOpen) refetchPages();
    }, [isOpen, refetchPages]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => toggleOpen(false)}
            className="sm:w-[30vw] sm:h-[30rem] xl:w-[15vw]"
        >
            <div className="w-5/6 h-5/6">
                <SearchBar
                    className="h-9 pl-4 mb-2"
                    searchPlace={flatPages.map((page) => page.name)}
                    placeholder="Search pages"
                    setResult={setSearchPages}
                />

                <PagesLayout
                    pages={flatPages}
                    selectedPage={selectedPage}
                    searchPages={searchPages}
                    toggleOpen={toggleOpen}
                />
            </div>
        </Modal>
    );
};

export default SearchModal;
