// Library
import { useQuery } from 'react-query';

// Local
import Account from '.';

export const useAccount = () => {
  return useQuery('account', Account.get);
};
