// Local
import EditableField from 'components/EditableField';
import Emoji from 'components/Emoji';
import useSafeContext from 'hooks/useSafeContext';
import { ProjectContext } from 'pages/Project/context';
import Page from 'services/page';

const Header = () => {
  const { page, selectedPage, menu } = useSafeContext(ProjectContext);

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
    <div className='flex flex-col items-start gap-4 mb-6'>
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
          defaultValue={page.data?.name}
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
