// Local
import Header from './Header';
import ModulesGrid from './ModulesGrid';

const Undefined = () => {
  return (
    <div className='flex flex-col w-3/4 h-full items-center justify-start gap-y-2'>
      <Header />

      <ModulesGrid />
    </div>
  );
};

export default Undefined;
