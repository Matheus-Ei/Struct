// Local
import withLoader from 'HOCs/withLoader';
import { useAccount } from 'services/account/useAccount';
import BasicInfo from './BasicInfo';
import SideBar from './SideBar';
import GoBackButton from 'modules/Navigator/GoBackButton';

const Profile = () => {
  const { data: account } = useAccount();

  return (
    <div className='relative w-screen h-screen flex flex-col items-center pt-10 lg:pt-20'>
      <div className='flex w-full ml-10 mb-8 lg:mb-0'>
        <GoBackButton lastPage='/dashboard' className='relative top-0 left-0' />
      </div>

      <div className='flex flex-col md:flex-row justify-center w-3/4 max-w-[80rem]'>
        <BasicInfo account={account} />

        <SideBar account={account} />
      </div>
    </div>
  );
};

export default withLoader(Profile, true);
