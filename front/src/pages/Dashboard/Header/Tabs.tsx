// Library
import clsx from 'clsx';

// Local
import { SetStateType } from 'types/global';
import router, { RouterType } from '../router';

interface TabsProps {
  tab: string;
  setTab: SetStateType<string>;
}

const Tabs = ({ tab, setTab }: TabsProps) => {
  const getStyle = (item: RouterType) =>
    clsx({
      'font-bold text-xl': tab === item.label,
      'text-lg': tab !== item.label,
    });

  const renderTabs = (item: RouterType) => {
    const css = getStyle(item);

    return (
      <button
        className={css}
        onClick={() => setTab(item.label)}
        key={item.label}
      >
        {item.label}
      </button>
    );
  };

  return <div className='flex flex-row gap-6'>{router.map(renderTabs)}</div>;
};

export default Tabs;
