// Library
import { ChangeEvent, KeyboardEvent } from 'react';

// Local
import { SetStateType } from 'types/global';

interface TextAreaTypeProps {
  defaultValue?: string;
  placeholder?: string;
  length?: {
    min?: number;
    max?: number;
  };
  setValue?: SetStateType<string>;
  onEnter?: () => void;
  className: string;
}

type EventType = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

const TextAreaType = ({
  defaultValue,
  placeholder,
  length,
  setValue,
  onEnter,
  className,
}: TextAreaTypeProps) => {
  const handleChange = (event: EventType) =>
    setValue && setValue(event.target.value);

  const onKeyDown = (e: KeyboardEvent) =>
    onEnter && e.key === 'Enter' && onEnter();

  return (
    <textarea
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      defaultValue={defaultValue}
      maxLength={length?.max}
      minLength={length?.min}
    ></textarea>
  );
};

export default TextAreaType;
