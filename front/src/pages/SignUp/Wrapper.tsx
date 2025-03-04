// Local
import { ReactComponent as Logo } from 'assets/logo-500x500-3.svg';
import { goPrevStep } from './utils/functions';
import Card from 'components/Card';
import Icon from 'components/Icon';
import { SignUpContext } from './context';
import useSafeContext from 'hooks/useSafeContext';
import Point from 'components/Point';

interface WrapperSignUpProps {
  children: JSX.Element;
}

const WrapperSignUp = ({ children }: WrapperSignUpProps) => {
  const { step } = useSafeContext(SignUpContext);

  const prevStep = () => goPrevStep(step.set);

  return (
    <Card>
      <div className='relative w-[55vw] h-[35rem] md:h-[25rem] md:min-w-[50rem] md:max-w-[75rem] flex flex-col items-center justify-center cursor-default overflow-y-scroll'>
        {step.value !== 0 && (
          <div className='w-full flex gap-x-2 opacity-60 hover:opacity-40'>
            <Point
              onClick={prevStep}
              icon={{
                name: 'IoArrowBackOutline',
                library: 'io5',
              }}
              text={'Go back'}
            />
          </div>
        )}

        <div className='w-full h-full flex flex-col md:flex-row items-center justify-center gap-x-10'>
          <div className='w-fit h-fit flex flex-col items-center'>
            <Logo className='text-primary w-52 h-fit mb-4' />

            <p className='text-primary text-center text-lg w-full md:w-72'>
              Come be part of a more organized world.
            </p>
          </div>

          {children}
        </div>
      </div>
    </Card>
  );
};

export default WrapperSignUp;
