// Libraries
import { useEffect } from 'react';
import clsx from 'clsx';

// Local
import { CreateProjectContext } from './context';
import useInputState from 'hooks/useInputState';
import { SetStateType } from 'types/global';

// Components
import DescriptionInput from './DescriptionInput';
import CreateButton from './CreateButton';
import TitleInput from './TitleInput';
import Modal from 'components/Modal';
import Header from './Header';

interface CreateProjectModalProps {
  showModal: boolean;
  setModal: SetStateType<boolean>;
}

// Styles
const css = clsx(
  'w-full h-full py-14',
  'flex flex-col items-center justify-center',
);

const CreateProjectModal = ({
  showModal,
  setModal,
}: CreateProjectModalProps) => {
  const title = useInputState<string>();
  const description = useInputState<string>();

  useEffect(() => {
    title.reset();
    description.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const contextValue = {
    title,
    description,
    setModal,
  };

  const closeModal = () => setModal(false);

  return (
    <CreateProjectContext.Provider value={contextValue}>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        className='sm:w-[30vw] sm:h-[70vh]'
      >
        <div className={css}>
          <Header />

          <div className='w-full h-full flex flex-col items-center justify-center overflow-y-scroll overflow-x-hidden'>
            <TitleInput />
            <DescriptionInput />
          </div>

          <CreateButton />
        </div>
      </Modal>
    </CreateProjectContext.Provider>
  );
};

export default CreateProjectModal;
