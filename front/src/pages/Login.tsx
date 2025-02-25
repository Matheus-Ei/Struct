// Libraries
import { useNavigate } from 'react-router';
import { useState } from 'react';

// Local
import { ReactComponent as Logo } from 'assets/logo-1800x400-1.svg';
import Account from 'services/account';

// Components
import Message from 'components/Message';
import Button from 'components/Button';
import Input from 'components/Input';
import Card from 'components/Card';
import withLoader from 'HOCs/withLoader';

const Login = () => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const login = () =>
    Account.login(mail, password)
      .then(() => {
        setMessage(null);
        navigate('/dashboard');
      })
      .catch((error) => setMessage(error.message));

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-base-300'>
      <Card>
        <div className='flex flex-col items-center justify-center max-w-[25rem] h-full overflow-y-scroll'>
          <Logo className='text-primary w-full min-h-24 h-fit mb-4' />

          <p className='text-primary mb-32 text-center text-lg cursor-default'>
            Come be part of a more organized world.
          </p>

          <Message
            text={message}
            type='error'
            box='text'
            isVisible={message ? true : false}
          />

          <Input
            placeholder='Mail'
            setValue={setMail}
            onEnter={login}
            className='min-h-14'
          />

          <Input
            placeholder='Password'
            setValue={setPassword}
            isPassword={true}
            onEnter={login}
            className='min-h-14'
          />

          <Button text='Login' inverse={true} onClick={login} />
        </div>
      </Card>
    </div>
  );
};

export default withLoader(Login);
