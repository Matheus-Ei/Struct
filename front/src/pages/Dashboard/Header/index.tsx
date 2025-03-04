// Local
import { SetStateType } from 'types/global';
import Logo from './Logo';
import ProfilePhoto from './ProfilePhoto';
import Tabs from './Tabs';

interface HeaderProps {
  tab: string;
  setTab: SetStateType<string>;
}

const Header = ({ tab, setTab }: HeaderProps) => {
  return (
    <div className='flex flex-col sm:flex-row w-screen sm:h-32 h-fit items-center justify-between gap-y-2 sm:gap-y-0 sm:px-12'>
      <div className='flex flex-col sm:flex-row w-full sm:w-fit h-full items-center justify-start gap-x-12'>
        <Logo />
        <Tabs tab={tab} setTab={setTab} />
      </div>

      <ProfilePhoto />
    </div>
  );
};

export default Header;
