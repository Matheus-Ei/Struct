// Libraries
import { FocusEvent, KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import Cursor from 'modules/Cursor';
import Event from 'modules/Event';
import Title from './Title';

interface EditableFieldProps {
  defaultValue: string | undefined;
  onUpdate: (value: string) => Promise<void>;
  className?: { edit?: string; normal?: string };
  title?: {
    text?: string;
    icon?: { position?: 'left' | 'right'; name?: string; library?: string };
  };
}

const EditableField = ({
  defaultValue,
  onUpdate,
  className,
  title,
}: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [preValue, setPreValue] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyEvent = new Event(event);

    const onPressEnter = async () => {
      keyEvent.preventDefault();
      setIsEditing(false);

      // Remove all new lines
      const newText = keyEvent.targetInnerText.replace(/\n/g, '');

      // Verifications
      if (newText === preValue) return;
      if (!newText) {
        keyEvent.targetInnerText = preValue;
        return;
      }

      // Update the value
      setPreValue(newText);
      try {
        await onUpdate(newText);
      } catch (error) {
        keyEvent.targetInnerText = preValue;
      }
    };

    Event.onKeyDown(event, [
      { key: 'Enter', callback: onPressEnter },
      {
        key: 'Escape',
        callback: () => {
          setIsEditing(false);
          keyEvent.targetInnerText = preValue;
        },
      },
    ]);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setIsEditing(true);
    const content = event.target as HTMLDivElement;
    setPreValue(content.innerText);

    // Focus the cursor, and move it to the end
    setTimeout(() => {
      if (isEditing) return;

      const cursor = new Cursor(divRef.current);

      cursor.focus();
      cursor.move('end');
    }, 0);
  };

  const handleBlur = (event: FocusEvent) => {
    const content = event.target as HTMLDivElement;
    content.innerText = preValue;
    setIsEditing(false);
  };

  const css = twMerge(
    clsx('w-fit h-fit text-base-content outline-none', {
      'bg-base-200 rounded-btn p-1': isEditing,
      'bg-base-100 cursor-pointer select-none hover:text-primary': !isEditing,
      [className?.edit as string]: isEditing,
      [className?.normal as string]: !isEditing,
    }),
  );

  const innerHTML = { __html: defaultValue ? defaultValue : '' };

  return (
    <div>
      <Title {...title} />

      <div
        contentEditable={isEditing}
        dangerouslySetInnerHTML={innerHTML}
        ref={divRef}
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={css}
      />
    </div>
  );
};

export default EditableField;
