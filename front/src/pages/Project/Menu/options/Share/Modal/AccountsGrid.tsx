// Local
import RenderAccount from 'services/project/share/RenderAccount';
import { SharedAccountType } from 'services/project/type';

interface AccountsGridProps {
  accounts: SharedAccountType[];
  refetch: () => void;
}

const AccountsGrid = ({ accounts, refetch }: AccountsGridProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-start w-full mt-2 ml-4'>
      {accounts.map((item: SharedAccountType, index: number) => (
        <RenderAccount account={item} refetch={refetch} key={index} />
      ))}
    </div>
  );
};

export default AccountsGrid;
