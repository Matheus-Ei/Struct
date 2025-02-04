// Librarie
import { MouseEvent } from 'react';
import { FaQuestion } from 'react-icons/fa';

// Local
import library, { LibsType } from './library';
import { IconType } from 'types/global';

interface IconsProps {
  value?: IconType;
  className?: string;
  onClick?: (event?: MouseEvent<HTMLElement>) => void;
  onBlur?: (event?: MouseEvent<HTMLElement>) => void;
  draggable?: boolean;
}

const Icon = ({ value, className, onClick, onBlur, draggable }: IconsProps) => {
  const props = {
    onClick: (event: any) => onClick && onClick(event),
    onBlur: (event: any) => onBlur && onBlur(event),
    draggable,
    className,
  };

  if (!value || !value.name || !value.library) return <FaQuestion {...props} />;

  try {
    const repository: LibsType = library[value.library];
    const RequiredIcon = repository[value.name];
    if (!RequiredIcon) return <FaQuestion {...props} />;

    return <RequiredIcon {...props} />;
  } catch {
    return <FaQuestion {...props} />;
  }
};

export default Icon;
