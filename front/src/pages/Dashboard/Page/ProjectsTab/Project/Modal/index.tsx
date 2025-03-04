// Libraries
import { createElement, useState } from 'react';

// Types
import { SetStateType } from 'types/global';
import { ModalType } from './utils/types';
import Modal from 'components/Modal';

// Local
import router, { RouterType } from './utils/router';
import Header from './Header';

interface ProjectModalProps {
  modal: ModalType;
  setModal: SetStateType<ModalType>;
}

const ProjectModal = ({ modal, setModal }: ProjectModalProps) => {
  const [tab, setTab] = useState<string>('About');

  const handleClose = () => {
    setModal({ show: false, projectId: 1 });
    setTab('About');
  };

  const renderTab = (item: RouterType) => {
    if (tab !== item.title) return null;

    return createElement(item.component, {
      key: item.title,
      projectId: modal.projectId,
      setModal,
    });
  };

  return (
    <Modal
      isOpen={modal.show}
      onClose={handleClose}
      className='w-screen h-screen sm:max-w-[80rem] sm:max-h-[25rem] sm:w-[75vw] sm:h-[55vh] z-30'
    >
      <div className='w-full h-full px-4 py-2'>
        <Header tab={tab} setTab={setTab} modal={modal} />

        <div className='w-full h-full overflow-y-scroll overflow-x-hidden pt-8'>
          {router.map(renderTab)}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
