// Libraries
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// Local
import Card from '../Card';
import CloseButton from './CloseButton';
import Background from './Background';

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const defaultCss = clsx(
  'relative w-screen h-screen sm:w-[85vw] sm:h-[75vh] z-30',
  'flex flex-col items-start justify-start',
);

const Modal = ({ children, isOpen, onClose, className }: ModalProps) => {
  if (!isOpen) return null;
  const css = twMerge(defaultCss, className);

  return (
    <Background onClick={onClose}>
      <Card>
        <div className={css}>
          <CloseButton onClick={onClose} />
          {children}
        </div>
      </Card>
    </Background>
  );
};

export default Modal;
