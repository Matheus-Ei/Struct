// Library
import clsx from 'clsx';

// Local
import useSafeContext from 'hooks/useSafeContext';
import { CreateProjectContext } from './context';
import Input from 'components/Input';

const DescriptionInput = () => {
  const { description } = useSafeContext(CreateProjectContext);

  const css = clsx('min-h-10 h-full', {
    'border-error': description.error,
    'border-neutral': !description.error,
  });

  return (
    <Input
      placeholder='Description'
      type='textarea'
      className={css}
      setValue={description.set}
      error={description.error}
    />
  );
};

export default DescriptionInput;
