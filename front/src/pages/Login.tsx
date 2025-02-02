// Libraries
import { useNavigate } from 'react-router';
import { useState } from 'react';

// Local
import { ReactComponent as Logo } from 'assets/logo-1800x400-1.svg';
import useToggle from 'hooks/useToggle';
import Account from 'services/account';

// Components
import Message from 'components/Message';
import Button from 'components/Button';
import Input from 'components/Input';
import Card from 'components/Card';

const Login = () => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, toggleError] = useToggle(false);

  const navigate = useNavigate();

  const login = () =>
    Account.login(mail, password, navigate).then(() => toggleError(true));

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-base-300'>
      <Card>
        <div className='flex flex-col items-center justify-center w-[25vw] py-6 px-4'>
          <Logo className='text-primary w-full h-fit mb-4' />

          <p className='text-primary mb-32 text-center text-lg'>
            Venha fazer parte de um mundo mais organizado.
          </p>

          <Message
            text='Mail or password incorrect, please, try again...'
            type='error'
            box='text'
            isVisible={error}
          />

          <Input placeholder='Mail' setValue={setMail} onEnter={login} />

          <Input
            placeholder='Password'
            setValue={setPassword}
            isPassword={true}
            onEnter={login}
          />

          <Button text='Login' inverse={true} onClick={login} />
        </div>
      </Card>
    </div>
  );
};

export default Login;
