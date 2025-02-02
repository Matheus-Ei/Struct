// Library
import clsx from 'clsx';

// Local
import Message404 from 'components/Message404';
import RenderAccount from 'services/project/share/RenderAccount';
import { SharedAccountType } from 'services/project/type';

const css = clsx(
  'grid items-start content-start',
  'overflow-y-scroll overflow-x-hidden',
  'w-[95%] h-4/5 mt-4',
  'gap-x-6 gap-y-4',
  'grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7',
);

interface AcountsGridProps {
  accounts: SharedAccountType[] | null | undefined;
  refetch: () => void;
}

const AccountGrid = ({ accounts, refetch }: AcountsGridProps) => {
  if (!accounts?.length) return <Message404 text='No users found' />;

  return (
    <div className={css}>
      {accounts?.map((item: SharedAccountType) => (
        <RenderAccount account={item} refetch={refetch} key={item.account_id} />
      ))}
    </div>
  );
};

export default AccountGrid;
