// Library
import { memo } from 'react';

// Local
import Icon from 'components/Icon';
import { SharedAccountType } from 'services/project/type';

interface HeaderProps {
  account: SharedAccountType;
}

const Header = ({ account }: HeaderProps) => {
  return (
    <div className='flex items-center justify-start gap-x-3'>
      <Icon value={{ name: 'FaUserAlt', library: 'fa' }} className='text-2xl' />

      <h1 className='text-lg'>{account.account_nickname}</h1>
    </div>
  );
};

export default memo(Header);
