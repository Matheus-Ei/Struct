// Libraries
import { useState } from 'react';

// Local
import { goNextStep } from '../utils/functions';
import Validations from '../utils/validations';
import Message from 'components/Message';
import Button from 'components/Button';
import Input from 'components/Input';
import { SignUpContext } from '../context';
import useSafeContext from 'hooks/useSafeContext';

const Start = () => {
  const [nickError, setNickError] = useState<string | null>(null);
  const [mailError, setMailError] = useState<string | null>(null);
  const useSignUpContext = useSafeContext(SignUpContext);
  const { nickname, name, mail, error, step } = useSignUpContext;

  const nextStep = async () => {
    const validations = new Validations(
      useSignUpContext,
      setNickError,
      setMailError,
    );

    const isValid = await validations.verify();
    if (!isValid) return;

    return goNextStep(step.set);
  };

  return (
    <div className='w-full md:w-2/4 h-full flex flex-col items-center justify-center'>
      <Input
        placeholder='name...'
        setValue={name.set}
        onEnter={nextStep}
        length={{ max: 80 }}
        defaultValue={name.value}
      />

      <div className='relative flex flex-col w-full h-fit items-center justify-center'>
        <Input
          placeholder='nickname...'
          setValue={nickname.set}
          onEnter={nextStep}
          length={{ max: 35 }}
          defaultValue={nickname.value}
          error={nickError}
        />
      </div>

      <div className='relative flex flex-col w-full h-fit items-center justify-center'>
        <Input
          placeholder='email...'
          setValue={mail.set}
          onEnter={nextStep}
          length={{ max: 120 }}
          defaultValue={mail.value}
          error={mailError}
        />
      </div>

      <Message
        type='error'
        box='text'
        text={error.value}
        isVisible={error.value ? true : false}
      />

      <Button inverse={true} text='Next' onClick={nextStep} />
    </div>
  );
};

export default Start;
