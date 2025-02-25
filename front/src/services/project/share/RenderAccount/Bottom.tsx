// Library
import { memo } from 'react';

// Local
import { SharedAccountType } from 'services/project/type';

interface BottomProps {
  account: SharedAccountType;
}

const Bottom = ({ account }: BottomProps) => {
  return (
    <h1 className='text-sm text-neutral italic line-clamp-1 w-full'>
      {account.account_email}
    </h1>
  );
};

export default memo(Bottom);
