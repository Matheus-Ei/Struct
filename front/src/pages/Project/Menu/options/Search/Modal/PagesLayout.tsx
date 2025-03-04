// Local
import { PageType } from 'services/page/types';
import { SetStateType } from 'types/global';
import Page from './Page';

interface PagesLayoutProps {
  pages: PageType[];
  selectedPage: { id: number | null; set: SetStateType<number | null> };
  toggleOpen: (isOpen: boolean) => void;
  searchPages: string[];
}

const PagesLayout = ({
  pages,
  selectedPage,
  toggleOpen,
  searchPages,
}: PagesLayoutProps) => {
  return (
    <div className='flex flex-col w-full h-full items-start overflow-y-scroll'>
      {pages.map((page: PageType, index: number) => {
        // If page is not in search pages, return null
        if (!searchPages.includes(page.title)) return null;

        return (
          <Page
            page={page}
            selectedPage={selectedPage}
            toggleOpen={toggleOpen}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PagesLayout;
