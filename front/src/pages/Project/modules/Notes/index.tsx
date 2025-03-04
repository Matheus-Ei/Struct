// Local
import Header from './Header';
import Body from './Body';

const Notes = () => {
  return (
    <div className='w-full xl:w-4/6 h-full pt-16 overflow-x-hidden overflow-y-scroll'>
      <Header />

      <Body />
    </div>
  );
};

export default Notes;
