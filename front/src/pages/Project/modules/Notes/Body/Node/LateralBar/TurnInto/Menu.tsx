// Local
import ContextMenu from 'components/ContextMenu';
import useSafeContext from 'hooks/useSafeContext';
import { NotesContext } from '../../../context';
import typesRouter, { NodesType } from '../../typesRouter';
import Operations from '../../utils/Operations';

interface MenuProps {
  show: boolean;
  onClose: () => void;
  order: number;
}
const Menu = ({ show, onClose, order }: MenuProps) => {
  const { nodes, nodesUpdater } = useSafeContext(NotesContext);

  if (!show) return null;
  const operations = new Operations(nodes);

  const renderTypes = (t: NodesType) => {
    const typeTitle =
      t.type.slice(0, 1).toUpperCase() + t.type.slice(1, t.type.length);

    const handleClick = () => {
      operations.updateContent(order, undefined, t.type);
      nodesUpdater();
    };

    return (
      <b className='font-normal hover:font-bold' onClick={handleClick}>
        {typeTitle}
      </b>
    );
  };

  return (
    <ContextMenu
      show={show}
      onClose={onClose}
      style={{
        location: { x: 15, y: 15 },
        translate: true,
        position: 'absolute',
      }}
    >
      <div className='flex flex-col items-start justify-center'>
        {typesRouter.map(renderTypes)}
      </div>
    </ContextMenu>
  );
};

export default Menu;
