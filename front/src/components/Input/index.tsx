// Libraries
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import { SetStateType } from 'types/global';
import Error from './Error';
import InputType from './InputType';
import TextAreaType from './TextAreaType';
import { memo } from 'react';

export type SetValueType =
  | SetStateType<string | undefined>
  | SetStateType<string>
  | SetStateType<string | null>
  | SetStateType<string | null | undefined>;

interface InputProps {
  defaultValue?: string;
  setValue?: SetValueType;
  placeholder?: string;
  isPassword?: boolean;
  type?: 'textarea' | 'input';
  onEnter?: () => void;
  length?: { max?: number; min?: number };
  className?: string;
  error?: string | null;
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
      'border-error': error,
      'border-neutral': !error,
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

export default memo(Input);
