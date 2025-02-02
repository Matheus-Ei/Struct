// Libraries
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import { ErrorType, SetStateType } from 'types/global';
import Error from './Error';
import InputType from './InputType';
import TextAreaType from './TextAreaType';

interface InputProps {
  defaultValue?: string;
  setValue?: SetStateType<string>;
  placeholder?: string;
  isPassword?: boolean;
  type?: 'textarea' | 'input';
  onEnter?: () => void;
  length?: { max?: number; min?: number };
  className?: string;
  error?: ErrorType;
}

const Input = ({
  placeholder,
  defaultValue = '',
  isPassword,
  type,
  length = { max: 100, min: 0 },
  error,
  className,
  onEnter,
  setValue,
}: InputProps) => {
  const defaultCss = clsx(
    'w-[95%] h-14 pl-4 mb-3',
    'bg-base-100 text-base-content',
    'border outline-none rounded-btn',
    {
      'border-error': error?.isError,
      'border-neutral': !error?.isError,
      'resize-none pt-4': type === 'textarea',
    },
  );
  const css = twMerge(defaultCss, className);

  const getField = () => {
    if (type === 'textarea')
      return (
        <TextAreaType
          placeholder={placeholder}
          setValue={setValue}
          defaultValue={defaultValue}
          length={length}
          className={css}
          onEnter={onEnter}
        />
      );

    return (
      <InputType
        placeholder={placeholder}
        setValue={setValue}
        defaultValue={defaultValue}
        length={length}
        className={css}
        isPassword={isPassword}
        onEnter={onEnter}
      />
    );
  };

  return (
    <>
      <Error error={error} />
      {getField()}
    </>
  );
};

export default Input;
