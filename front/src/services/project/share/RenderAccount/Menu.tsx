// Library
import { memo, MouseEvent } from 'react';

// Local
import ContextMenu from 'components/ContextMenu';
import Icon from 'components/Icon';
import { SharedAccountType } from 'services/project/type';
import ProjectShare from '..';

interface MenuProps {
  isHover: boolean;
  menu: {
    isOpen: boolean;
    toggle: (value: boolean) => void;
    position: { x: number; y: number };
  };
  account: SharedAccountType;
  onOpen: (event?: MouseEvent) => void;
  refetch?: () => void;
}

const Menu = ({ isHover, menu, refetch, onOpen, account }: MenuProps) => {
  const unshare = async () => {
    await ProjectShare.delete(
      String(account.project_id),
      account.account_nickname,
    );
    menu.toggle(false);
    refetch && refetch();
  };

  return (
    <div className='relative flex items-center justify-start gap-x-3'>
      {isHover && (
        <Icon value={{ name: 'IoIosMore', library: 'io' }} onClick={onOpen} />
      )}

      <ContextMenu
        onClose={() => menu.toggle(false)}
        show={menu.isOpen}
        style={{ location: menu.position }}
      >
        <button
          className='flex gap-2 items-center justify-center'
          onClick={unshare}
        >
          <Icon value={{ name: 'MdDelete', library: 'md' }} />

          <h1>Delete</h1>
        </button>
      </ContextMenu>
    </div>
  );
};

export default memo(Menu);
