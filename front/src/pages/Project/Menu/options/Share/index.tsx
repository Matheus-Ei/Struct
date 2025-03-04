// Local
import Point from 'components/Point';
import useToggle from 'hooks/useToggle';
import ShareModal from './Modal';

const Share = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <Point
        text='Share'
        icon={{ name: 'IoMdShare', library: 'io' }}
        onClick={() => toggleOpen(true)}
        className='hover:opacity-60'
      />

      <ShareModal isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
};

export default Share;
