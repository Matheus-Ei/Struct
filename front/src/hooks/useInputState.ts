// Library
import { useState } from 'react';

// Local
import { SetStateType } from 'types/global';

const useInputState = <T>() => {
  const [value, set] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    set(null);
    setError(null);
  };

  const validate = () => {
    if (!value) {
      setError('This field is required.');
      return false;
    }

    setError(null);
    return true;
  };

  return { value, set, error, setError, reset, validate };
};

export interface InputStateType<T> {
  value: T | null;
  set: SetStateType<T | null>;
  error: string | null;
  setError: SetStateType<string | null>;
  reset: () => void;
  validate: () => boolean;
}

export default useInputState;
