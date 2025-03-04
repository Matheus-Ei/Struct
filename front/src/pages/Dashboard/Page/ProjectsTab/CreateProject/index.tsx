// Libraries
import { useState } from 'react';
import clsx from 'clsx';

// Local
import CreateProjectModal from './Modal';
import Icon from 'components/Icon';
import { twMerge } from 'tailwind-merge';

const buttonCss = clsx(
  'w-56 h-16',
  'flex items-center justify-center',
  'gap-6',
  'rounded-btn border-2 border-dashed border-primary hover:border-secondary',
);

interface CreateProjectProps {
  className?: string;
}

const CreateProject = ({ className }: CreateProjectProps) => {
  const [showModal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const css = twMerge(buttonCss, className);

  return (
    <div className='flex p-3 justify-center md:justify-start items-center'>
      <button onClick={openModal} className={css}>
        <Icon value={{ name: 'IoAdd', library: 'io5' }} className='text-2xl' />

        <h1>New project</h1>
      </button>

      <CreateProjectModal showModal={showModal} setModal={setModal} />
    </div>
  );
};

export default CreateProject;
