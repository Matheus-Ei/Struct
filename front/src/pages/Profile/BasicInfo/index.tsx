// Local
import EditableField from 'components/EditableField';
import Account from 'services/account';
import { AccountType } from 'services/account/type';
import Header from './Header';

interface BasicInfoProps {
  account: AccountType;
}

const BasicInfo = ({ account }: BasicInfoProps) => {
  const update = async (value: string, field: 'name' | 'about') => {
    const fullName = field === 'name' ? value : undefined;
    const bio = field === 'about' ? value : undefined;

    await Account.update(fullName, bio, undefined);
  };

  return (
    <div className='flex flex-col w-5/6 gap-y-4'>
      <Header account={account} update={update} />

      <EditableField
        defaultValue={account?.bio ?? 'Description was not provided...'}
        onUpdate={(value) => update(value, 'about')}
        title={{ text: 'About me' }}
      />
    </div>
  );
};

export default BasicInfo;
