// Local
import ThemeSelector from 'modules/Theme/Selector';
import Header from './Header';
import withLoader from 'HOCs/withLoader';
import GoBackButton from 'modules/Navigator/GoBackButton';

const Settings = () => {
  return (
    <div className='relative flex flex-col items-center h-screen w-screen pt-8 lg:pt-20'>
      <div className='flex w-full ml-10 mb-8 lg:mb-0'>
        <GoBackButton lastPage='/dashboard' className='relative top-0 left-0' />
      </div>

      <div className='flex flex-col items-center h-full w-3/4'>
        <Header />

        <ThemeSelector />
      </div>
    </div>
  );
};

export default withLoader(Settings, true);
