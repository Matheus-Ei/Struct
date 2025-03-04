// Local
import Delete from 'services/account/Delete';
import Logout from 'services/account/Logout';
import { AccountType } from 'services/account/type';

interface SideBarProps {
  account: AccountType | null | undefined;
}

const SideBar = ({ account }: SideBarProps) => {
  return (
    <div className='flex flex-col items-start w-1/6 h-full gap-y-4 mt-10'>
      <Logout />
      <Delete />
    </div>
  );
};

export default SideBar;
