// Local
import EditableField from 'components/EditableField';
import Image from 'components/Image';
import Account from 'services/account';
import { AccountType } from 'services/account/type';

interface HeaderProps {
  account: AccountType | null | undefined;
  update: (value: string, field: 'name' | 'about') => Promise<void>;
}

const Header = ({ account, update }: HeaderProps) => {
  const handleUpdate = async (imageData: File) => {
    await Account.changePicture(imageData);
  };

  return (
    <div className='flex items-center w-[90%] h-52 gap-x-4'>
      <Image
        src={account?.pictureData}
        onUpdate={handleUpdate}
        className={{ container: 'mr-8' }}
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

        <p className='text-base-content opacity-60 italic cursor-default'>
          @{account?.nickname}
        </p>
      </div>
    </div>
  );
};

export default Header;
