// Libraries
import { useEffect, useMemo, useState } from 'react';

// Local
import Modal from 'components/Modal';
import { ProjectContext } from 'pages/Project/context';
import { useAllPages } from 'services/page/usePage';
import { PageType } from 'services/page/types';
import SearchBar from 'components/SearchBar';
import useSafeContext from 'hooks/useSafeContext';
import PagesLayout from './PagesLayout';

const flattenPages = (pages?: PageType[] | null): PageType[] => {
  let result: PageType[] = [];

  pages?.forEach((page) => {
    result.push({
      id: page.id,
      title: page.title,
      emoji: page.emoji,
      description: page.description,
      module_title: page.module_title,
      module_information: page.module_information,
      parent_page_id: page.parent_page_id,
      project_id: page.project_id,
      child_pages: [],
    });

    if (page.child_pages) {
      result = result.concat(flattenPages(page.child_pages));
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
    setSearchPages(flatPages.map((page) => page.title));
  }, [flatPages]);

  // Refetch pages when modal is opened
  useEffect(() => {
    if (isOpen) refetchPages();
  }, [isOpen, refetchPages]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => toggleOpen(false)}
      className='sm:w-[30vw] sm:h-[80vh] 2xl:h-[50vh] xl:w-[15vw]'
    >
      <div className='w-5/6 h-5/6'>
        <SearchBar
          className='h-9 mb-2'
          searchPlace={flatPages.map((page) => page.title)}
          placeholder='Search pages'
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
