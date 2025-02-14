// Local
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from './context';
import Input from 'components/Input';

const TitleInput = () => {
  const { title } = useSafeContext(CreateProjectContext);

  return (
    <Input
      placeholder='Title'
      type='input'
      setValue={title.set}
      error={title.error}
      className='min-h-10'
    />
  );
};

export default TitleInput;
