// Library
import { useNavigate } from 'react-router-dom';

// Local
import Point from 'components/Point';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface GoBackButtonProps {
  lastPage: string;
  className?: string;
}

const GoBackButton = ({ lastPage, className }: GoBackButtonProps) => {
  const navigate = useNavigate();

  const css = twMerge('absolute left-20 top-20 hover:opacity-60', className);

  return (
    <Point
      icon={{ name: 'IoIosArrowBack', library: 'io' }}
      text='Go back'
      onClick={() => navigate(lastPage)}
      className={css}
    />
  );
};

export default memo(GoBackButton);
