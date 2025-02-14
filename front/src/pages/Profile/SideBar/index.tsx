// Local
import Logout from 'services/account/Logout';
import { AccountType } from 'services/account/type';
// import ChangeInfo from './ChangeInfo';

interface SideBarProps {
  account: AccountType | null | undefined;
}

const SideBar = ({ account }: SideBarProps) => {
  /* 
          <ChangeInfo
          text='Change password'
          icon={{ name: 'IoIosLock', library: 'io' }}
          onClick={() => {}}
        />
  
        <ChangeInfo
          text='Change email'
          icon={{ name: 'IoIosMail', library: 'io' }}
          onClick={() => {}}
        />
   */

  return (
    <div className='flex flex-col items-start w-1/6 h-full gap-y-4 mt-10'>
      <Logout />
    </div>
  );
};

export default SideBar;
