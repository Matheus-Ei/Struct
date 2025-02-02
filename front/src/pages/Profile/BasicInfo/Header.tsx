// Local
import EditableField from 'components/EditableField';
import { AccountType } from 'services/account/type';

interface HeaderProps {
  account: AccountType;
  update: (value: string, field: 'name' | 'about') => Promise<void>;
}

const Header = ({ account, update }: HeaderProps) => {
  return (
    <div className='flex items-center w-full h-40 gap-x-4'>
      <img
        src='https://via.placeholder.com/500'
        className='h-full rounded-full'
        alt='profile'
      />

      <div className='flex flex-col gap-y-1'>
        <EditableField
          defaultValue={account?.full_name}
          onUpdate={(value) => update(value, 'name')}
          title={{ text: 'Name' }}
          className={{
            edit: 'text-3xl font-bold',
            normal: 'text-4xl font-bold',
          }}
        />

        <p className='text-neutral italic'>@{account?.nickname}</p>
      </div>
    </div>
  );
};

export default Header;
