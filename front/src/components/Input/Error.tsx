// Local
import { ErrorType } from 'types/global';

interface ErrorProps {
  error?: ErrorType;
}

const Error = ({ error }: ErrorProps) => {
  if (!error || !error.isError) return null;

  return <p className='text-error text-sm w-full px-4'>{error.message}</p>;
};

export default Error;
