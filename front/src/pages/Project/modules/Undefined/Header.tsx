// Libraries
import { useEffect, useState } from 'react';

// Local
import { ProjectContext } from 'pages/Project/context';
import EditableField from 'components/EditableField';
import Emoji from 'components/Emoji';
import Page from 'services/page';
import useSafeContext from 'hooks/useSafeContext';

const Header = () => {
  const { page, selectedPage, menu } = useSafeContext(ProjectContext);
  const [emoji, setEmoji] = useState<string | undefined>();

  useEffect(() => {
    setEmoji(page.data?.emoji);
  }, [page.data?.emoji]);

  const update = async (
    value: string | null | undefined,
    type: 'name' | 'description' | 'emoji',
  ) => {
    if (!selectedPage?.id) return;

    let name = type === 'name' ? value : undefined;
    let description = type === 'description' ? value : undefined;
    let emoji = type === 'emoji' ? value : undefined;

    await Page.edit(selectedPage.id, name, description, emoji);

    menu.refetch();
  };

  return (
    <div className='flex flex-col w-full mb-8 items-start justify-center gap-y-3'>
      <div className='flex gap-6 items-center'>
        <Emoji
          symbol={page.data?.emoji}
          className='text-4xl'
          selectorOnClick
          onUpdate={(value) => update(value, 'emoji')}
        />

        <EditableField
          className={{
            edit: 'text-3xl font-bold',
            normal: 'text-4xl font-bold',
          }}
          defaultValue={page.data?.title}
          onUpdate={(value) => update(value, 'name')}
        />
      </div>

      <EditableField
        className={{ edit: 'text-lg', normal: 'text-lg' }}
        defaultValue={page.data?.description}
        onUpdate={(value) => update(value, 'description')}
      />
    </div>
  );
};

export default Header;
