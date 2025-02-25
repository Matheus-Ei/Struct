// Library
import { useNavigate } from 'react-router-dom';

// Local
import Point from 'components/Point';
import { memo } from 'react';

interface GoBackButtonProps {
  lastPage: string;
}

const GoBackButton = ({ lastPage }: GoBackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Point
      icon={{ name: 'IoIosArrowBack', library: 'io' }}
      text='Go back'
      onClick={() => navigate(lastPage)}
      className='absolute left-20 top-20 hover:opacity-60'
    />
  );
};

export default memo(GoBackButton);
