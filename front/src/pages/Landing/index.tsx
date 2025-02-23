// Local
import withLoader from 'HOCs/withLoader';
import Header from './Header';

const Landing = () => {
  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <Header />
    </div>
  );
};

export default withLoader(Landing);
