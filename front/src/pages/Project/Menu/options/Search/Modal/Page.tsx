// Library
import clsx from "clsx";

// Local
import Emoji from "components/Emoji";
import { PageType } from "services/page/types";
import { SetStateType } from "types/global";

const pageCss = clsx(
    "w-full h-fit gap-x-2 rounded-btn py-2 px-4",
    "flex flex-row justify-start items-start text-start",
    "cursor-pointer select-none hover:bg-base-200"
);

interface PageProps {
    page: PageType;
    selectedPage: { id: number | null; set: SetStateType<number | null> };
    toggleOpen: (isOpen: boolean) => void;
}

const Page = ({ page, selectedPage, toggleOpen }: PageProps) => {
    return (
        <div
            className={pageCss}
            onClick={() => {
                selectedPage.set(page.id);
                toggleOpen(false);
            }}
        >
            <Emoji symbol={page.emoji} />
            <h1 className="line-clamp-1 w-full text-sm">{page.name}</h1>
        </div>
    );
};

export default Page;
