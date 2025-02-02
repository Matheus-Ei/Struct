// Library
import { useState } from 'react';

// Local
import { ProjectsContext, ProjectsContextType } from './context';
import { useAllProjects } from 'services/project/useProject';
import { ProjectType } from 'services/project/type';
import SearchBar from 'components/SearchBar';
import ProjectsGrid from './ProjectsGrid';

const ProjectsTab = () => {
  const { data: projects, refetch } = useAllProjects();
  const [searchResult, setSearchResult] = useState<Array<string>>([]);

  // Set the search place to the title of the projects
  const searchPlace = projects?.map((item: ProjectType): string => item.title);

  const contextValue: ProjectsContextType = { refetch };

  return (
    <ProjectsContext.Provider value={contextValue}>
      <div className='flex flex-col items-center justify-center w-screen gap-4'>
        <SearchBar
          searchPlace={searchPlace}
          setResult={setSearchResult}
          placeholder='Search project. . .'
          className='w-[40%]'
        />

        <ProjectsGrid projects={projects} searchResult={searchResult} />
      </div>
    </ProjectsContext.Provider>
  );
};

export default ProjectsTab;
