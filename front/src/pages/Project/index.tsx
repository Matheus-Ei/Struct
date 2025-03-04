// Librarie
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Local
import { useAllPages, usePage } from 'services/page/usePage';
import { ProjectContext } from './context';
import withLoader from 'HOCs/withLoader';
import Dashboard from './Dashboard';
import Menu from './Menu';
import Page from './Page';

const Project = () => {
  const { id } = useParams();

  // Menu tabs request
  const { data: tabs, refetch: refetchTabs } = useAllPages(Number(id));

  // Page content request
  const [selectedPageId, setSelectedPageId] = useState<number | null>(null);
  const { data: page, refetch: refetchPage } = usePage(selectedPageId);

  const contextValue = {
    projectId: id,
    menu: { tabs, refetch: refetchTabs },
    page: { data: page, refetch: refetchPage },
    selectedPage: { id: selectedPageId, set: setSelectedPageId },
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      <div className='flex flex-row items-center w-screen h-screen'>
        <Menu />

        {selectedPageId ? <Page /> : <Dashboard />}
      </div>
    </ProjectContext.Provider>
  );
};

export default withLoader(Project, true);
