// Libraries
import { NavigateFunction } from 'react-router-dom';

// Local
import { SignUpContextType } from '../context';
import { SetStateType } from 'types/global';
import Account from 'services/account';

export const makeSignUp = async (
  useSignUpContext: SignUpContextType | null,
  navigate: NavigateFunction,
) => {
  if (!useSignUpContext) return null;
  const { password, rePassword, nickname, mail, name, setError } =
    useSignUpContext;

  try {
    if (!password || !nickname || !mail || !name) {
      setError({ isError: true, message: 'Please fill all fields' });
      return;
    }

    if (password !== rePassword) {
      setError({ isError: true, message: 'Passwords do not match' });
      return;
    }

    Account.signUp(
      name,
      nickname.toLowerCase(),
      mail.toLowerCase(),
      password,
      navigate,
    );
  } catch {
    setError({
      isError: true,
      message: 'An error occurred, please try again',
    });
  }
};

export const goPrevStep = (setStep: SetStateType<number>) => {
  setStep((prev) => {
    if (prev === 0) return prev;

    return prev - 1;
  });
};

export const goNextStep = (setStep: SetStateType<number>) => {
  setStep((prev) => {
    return prev + 1;
  });
};
