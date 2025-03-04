// Local
import { useProject } from 'services/project/useProject';
import { TabProps } from '../../utils/types';
import MoreInfo from './MoreInfo';
import Header from './Header';

const About = ({ projectId }: TabProps) => {
  const { data: project } = useProject(projectId);

  return (
    <div className='flex flex-col w-full gap-y-8'>
      <Header project={project} />

      <MoreInfo project={project} />
    </div>
  );
};

export default About;
