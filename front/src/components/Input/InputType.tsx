// Library
import { ChangeEvent, KeyboardEvent, memo } from 'react';

// Local
import { SetValueType } from '.';

interface InputTypeProps {
  defaultValue?: string;
  placeholder?: string;
  length?: {
    min?: number;
    max?: number;
  };
  className?: string;
  isPassword?: boolean;
  setValue?: SetValueType;
  onEnter?: () => void;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const InputType = ({
  defaultValue,
  placeholder,
  length,
  className,
  isPassword,
  setValue,
  onEnter,
}: InputTypeProps) => {
  const handleChange = (event: EventType) =>
    setValue && setValue(event.target.value);

  const onKeyDown = (e: KeyboardEvent) =>
    onEnter && e.key === 'Enter' && onEnter();

  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      type={!isPassword ? 'text' : 'password'}
      defaultValue={defaultValue}
      onKeyDown={onKeyDown}
      maxLength={length?.max}
      minLength={length?.min}
    ></input>
  );
};

export default memo(InputType);
