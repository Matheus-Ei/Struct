import { memo } from "react";

interface ErrorProps {
  error?: string | null;
}

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <p className='text-error text-sm w-full px-4'>{error}</p>;
};

export default memo(Error);
