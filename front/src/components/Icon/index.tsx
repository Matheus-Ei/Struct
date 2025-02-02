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
}

const Icon = ({ value, className, onClick }: IconsProps) => {
  const props = {
    onClick: (event: any) => onClick && onClick(event),
    className,
  };

  if (!value || !value.name || !value.library) return <FaQuestion {...props} />;

  try {
    const repository: LibsType = library[value.library];
    const RequiredIcon = repository[value.name];

    return <RequiredIcon {...props} />;
  } catch {
    return <FaQuestion {...props} />;
  }
};

export default Icon;
