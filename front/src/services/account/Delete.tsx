// Libraries
import { useNavigate } from 'react-router-dom';

// Local
import Button from 'components/Button';
import Account from 'services/account';
import Icon from 'components/Icon';

const Delete = () => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const wantDelete = window.confirm(
      'Do you really want to delete your account?',
    );

    wantDelete && (await Account.delete()) && navigate('/');
  };

  return (
    <Button
      onClick={handleDelete}
      className='flex w-fit text-error bg-base-100 font-bold border-none p-0 hover:bg-base-100 hover:text-error hover:opacity-50 gap-x-2 items-center justify-center'
    >
      <>
        <Icon value={{ name: 'FaTrash', library: 'fa' }} />

        <h1>Delete</h1>
      </>
    </Button>
  );
};

export default Delete;
