// Libraries
import { useState } from 'react';

// Local
import { ErrorType } from 'types/global';
import Password from './steps/Password';
import Start from './steps/Start';
import Wrapper from './Wrapper';
import { SignUpContext } from './context';

const SignUp = () => {
  const [step, setStep] = useState<number>(0);

  const [name, setName] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

  const [error, setError] = useState<ErrorType>({
    message: '',
    isError: false,
  });

  const contextValue = {
    step,
    setStep,
    name,
    setName,
    nickname,
    setNickname,
    mail,
    setMail,
    password,
    setPassword,
    rePassword,
    setRePassword,
    error,
    setError,
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      <div className='flex justify-center items-center w-screen h-screen bg-base-300'>
        <Wrapper>
          <>
            {step === 0 && <Start />}

            {step === 1 && <Password />}
          </>
        </Wrapper>
      </div>
    </SignUpContext.Provider>
  );
};

export default SignUp;
