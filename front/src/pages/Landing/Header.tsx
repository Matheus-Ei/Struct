// Libraries
import { useNavigate } from 'react-router-dom';

// Local
import { ReactComponent as Logo } from 'assets/logo-1800x400-1.svg';
import Button from 'components/Button';
import Account from 'services/account';

const Header = () => {
  const navigate = useNavigate();

  const openLogin = async () => {
    const response = await Account.verifyLogin();

    return response ? navigate('/dashboard') : navigate('/login');
  };

  const openSignup = () => navigate('/sign-up');

  return (
    <div className='flex flex-row relative justify-between items-center top-0 border-b border-base-200 w-screen h-16 px-6'>
      <Logo className='w-fit h-3/4 text-primary' />

      <div className='flex gap-4'>
        <Button
          text='Login'
          className='border-2  px-10 py-1'
          onClick={openLogin}
        />

        <Button
          text='Sign-up'
          className='border-2 px-10 py-1 bg-primary border-primary text-primary-content'
          onClick={openSignup}
        />
      </div>
    </div>
  );
};

export default Header;
