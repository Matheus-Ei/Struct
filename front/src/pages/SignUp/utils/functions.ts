// Local
import { SetStateType } from 'types/global';

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
