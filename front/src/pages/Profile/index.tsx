// Local
import withLoader from 'HOCs/withLoader';
import { useAccount } from 'services/account/useAccount';
import BasicInfo from './BasicInfo';
import SideBar from './SideBar';
import GoBackButton from 'modules/Navigator/GoBackButton';

const Profile = () => {
  const { data: account } = useAccount();

  return (
    <div className='relative w-screen h-screen flex flex-col items-center pt-20'>
      <GoBackButton lastPage='/dashboard' />

      <div className='flex justify-center w-2/4 h-full'>
        <BasicInfo account={account} />

        <SideBar account={account} />
      </div>
    </div>
  );
};

export default withLoader(Profile, true);
