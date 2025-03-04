// Libraries
import { useNavigate } from 'react-router-dom';

// Local
import Message from 'components/Message';
import Button from 'components/Button';
import Input from 'components/Input';
import { SignUpContext } from '../context';
import useSafeContext from 'hooks/useSafeContext';
import Account from 'services/account';

const Password = () => {
  const useSignUpContext = useSafeContext(SignUpContext);
  const { name, nickname, mail, password, rePassword, error } =
    useSignUpContext;

  const navigate = useNavigate();

  const signUp = () => {
    if (password.value !== rePassword.value) {
      error.set('Passwords do not match');
      return;
    }

    Account.signUp(
      name.value,
      nickname.value?.toLowerCase(),
      mail.value?.toLowerCase(),
      password.value,
    )
      .then(() => navigate('/dashboard'))
      .catch((err) => error.set(err.message));
  };

  return (
    <div className='w-full md:w-2/4 h-full flex flex-col items-center justify-center'>
      <Input
        placeholder='password...'
        setValue={password.set}
        isPassword={true}
        length={{ max: 80 }}
        onEnter={signUp}
      />
      <Input
        placeholder='re-type password...'
        setValue={rePassword.set}
        isPassword={true}
        length={{ max: 80 }}
        onEnter={signUp}
      />

      <Message
        text={error.value}
        box='text'
        type='error'
        isVisible={error.value ? true : false}
      />

      <Button inverse={true} text='Sign-up' onClick={signUp} />
    </div>
  );
};

export default Password;
