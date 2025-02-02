// Library
import { useNavigate } from 'react-router-dom';

// Local
import Button from 'components/Button';
import Icon from 'components/Icon';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center w-screen h-screen gap-x-10'>
      <Icon
        value={{ name: 'GiCactusPot', library: 'gi' }}
        className='text-9xl text-primary'
      />

      <div className='flex flex-col'>
        <h1 className='text-4xl font-semibold italic'>Page not found</h1>

        <Button
          text='Go home'
          onClick={() => {
            navigate('/');
          }}
          className='border-none p-0 mt-2 hover:text-secondary'
        />
      </div>
    </div>
  );
};

export default NotFound;
