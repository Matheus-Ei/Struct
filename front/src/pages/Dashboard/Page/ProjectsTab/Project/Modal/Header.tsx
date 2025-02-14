// Libraries
import clsx from 'clsx';

// Local
import { SetStateType } from 'types/global';
import { ModalType } from './utils/types';
import router, { RouterType } from './utils/router';
import Icon from 'components/Icon';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  tab: string;
  setTab: SetStateType<string>;
  modal: ModalType;
}

const Header = ({ tab, setTab, modal }: HeaderProps) => {
  const navigate = useNavigate();

  const renderTabs = (item: RouterType) => {
    const tabCss = clsx('select-none cursor-pointer', {
      'font-bold text-xl': tab === item.title,
      'text-lg hover:opacity-60': tab !== item.title,
    });

    return (
      <h1
        key={item.title}
        className={tabCss}
        onClick={() => setTab(item.title)}
      >
        {item.title}
      </h1>
    );
  };

  return (
    <div className='w-fit flex flex-row gap-x-8 p-2 ml-8'>
      {router.map(renderTabs)}

      <Icon
        value={{ name: 'MdOpenInNew', library: 'md' }}
        className='absolute right-12 top-3 sm:right-10 sm:top-1 text-xl hover:opacity-60 cursor-pointer'
        onClick={() => navigate(`/project/${modal.projectId}`)}
      />
    </div>
  );
};

export default Header;
