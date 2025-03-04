// Local
import Icon from 'components/Icon';
import { deletePage } from 'pages/Project/util/events';
import useSafeContext from 'hooks/useSafeContext';
import { ProjectContext } from 'pages/Project/context';
import { PageTabContext } from '../context';

const DeletePage = () => {
  const useProjectContext = useSafeContext(ProjectContext);
  const { menu, page } = useSafeContext(PageTabContext);

  return (
    <button
      className='flex gap-2 items-center justify-center'
      onClick={() => deletePage(menu.toggle, page.id, useProjectContext)}
    >
      <Icon value={{ name: 'MdDelete', library: 'md' }} />

      <h1>Delete</h1>
    </button>
  );
};

export default DeletePage;
