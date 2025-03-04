// Library
import clsx from 'clsx';

// Local
import { ProjectType } from 'services/project/type';
import CreateProject from './CreateProject';
import Project from './Project';

const css = clsx(
  'grid items-center justify-items-start gap-x-6 gap-y-2',
  'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4',
);

interface ProjectsGridProps {
  projects: Array<ProjectType> | undefined;
  searchResult: Array<string>;
}

const project = (item: ProjectType, searchResult: string[]) => {
  // If the searchPlace is set and the item is not in the searchPlace, return null
  if (searchResult && !searchResult.includes(item.title)) return null;

  return (
    <Project
      id={item.id}
      title={item.title}
      description={item.description}
      key={item.id}
    />
  );
};

const ProjectsGrid = ({ projects, searchResult }: ProjectsGridProps) => {
  if (!projects?.length)
    return (
      <CreateProject className='w-fit h-fit border-none hover:border-none hover:text-primary hover:font-bold' />
    );

  const renderProjects = () => {
    return projects.map((item) => project(item, searchResult));
  };

  return (
    <div className={css}>
      {renderProjects()}

      <CreateProject />
    </div>
  );
};

export default ProjectsGrid;
