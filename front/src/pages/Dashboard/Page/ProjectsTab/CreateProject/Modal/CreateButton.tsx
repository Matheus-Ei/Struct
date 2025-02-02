// Local
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from './context';
import { ProjectsContext } from '../../context';
import Button from 'components/Button';
import Project from 'services/project';

const CreateButton = () => {
  const { refetch } = useSafeContext(ProjectsContext);
  const { title, description, setModal } = useSafeContext(CreateProjectContext);

  const create = async () => {
    const titleIsValid = title.validate();
    const descriptionIsValid = description.validate();

    if (!titleIsValid || !descriptionIsValid) return;

    await Project.create(title.value, description.value);

    setModal(false);
    refetch();
  };

  return (
    <Button
      text='Create'
      inverse={true}
      onClick={create}
      className='absolute bottom-0'
    />
  );
};

export default CreateButton;
