// Local
import { TabProps } from '../../utils/types';
import DeleteProject from './DeleteProject';

const Settings = ({ projectId, setModal }: TabProps) => {
  return (
    <div className='w-full flex justify-start items-start'>
      <DeleteProject projectId={projectId} setModal={setModal} />
    </div>
  );
};

export default Settings;
