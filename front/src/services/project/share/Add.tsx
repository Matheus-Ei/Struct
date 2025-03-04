// Library
import { memo, useState } from 'react';

// Local
import Input from 'components/Input';
import Options from 'components/Options';
import Point from 'components/Point';
import ProjectShare from '.';
import { idType } from 'types/global';

const roleOptions = [
  'owner',
  'admin',
  'editor',
  'commenter',
  'filler',
  'viewer',
];

interface NewShareProps {
  projectId: idType;
  refetch?: () => void;
}

const NewShare = ({ projectId, refetch }: NewShareProps) => {
  const [nickname, setNickname] = useState<string>('');
  const [role, setRole] = useState<number>(0);

  const shareProject = async () => {
    await ProjectShare.add(projectId, nickname, roleOptions[role]);

    refetch && refetch();
  };

  return (
    <div className='flex gap-x-4 items-center justify-center'>
      <Input
        placeholder='Nickname'
        className='border-base-100 rounded-none border-b border-b-neutral m-0 h-8 px-2 pb-1 outline-none bg-base-100'
        setValue={setNickname}
        onEnter={shareProject}
      />

      <Options options={roleOptions} selected={{ value: role, set: setRole }} />

      <Point
        icon={{ name: 'BsFillShareFill', library: 'bs' }}
        onClick={shareProject}
        className='ml-4 hover:opacity-60'
      />
    </div>
  );
};

export default memo(NewShare);
