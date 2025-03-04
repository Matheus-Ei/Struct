// Libraries
import { useState } from 'react';

// Local
import Password from './steps/Password';
import Start from './steps/Start';
import Wrapper from './Wrapper';
import { SignUpContext } from './context';
import withLoader from 'HOCs/withLoader';

const SignUp = () => {
  const [step, setStep] = useState<number>(0);

  const [name, setName] = useState<string | undefined>();
  const [mail, setMail] = useState<string | undefined>();
  const [nickname, setNickname] = useState<string | undefined>();

  const [password, setPassword] = useState<string | undefined>();
  const [rePassword, setRePassword] = useState<string | undefined>();

  const [error, setError] = useState<string | null>(null);

  const contextValue = {
    step: { value: step, set: setStep },
    name: { value: name, set: setName },
    mail: { value: mail, set: setMail },
    nickname: { value: nickname, set: setNickname },
    password: { value: password, set: setPassword },
    rePassword: { value: rePassword, set: setRePassword },
    error: { value: error, set: setError },
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

export default withLoader(SignUp);
