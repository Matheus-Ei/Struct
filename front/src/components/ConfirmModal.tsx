// Libraries
import { twMerge } from 'tailwind-merge';

// Local
import Button from './Button';
import Modal from './Modal';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onDecline?: () => void;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  className?: string;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  onDecline,
  className,
  message = 'Are you sure?',
  confirmText = 'Yes',
  cancelText = 'No',
}: ConfirmModalProps) => {
  const css = twMerge(
    'w-96 h-24 sm:w-96 sm:h-24',
    'items-center justify-center',
    className,
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={css}>
      <>
        <h1 className='mb-5'>{message}</h1>

        <div className='flex gap-4'>
          <Button text={confirmText} onClick={onConfirm} inverse={true} />

          <Button
            text={cancelText}
            onClick={() => (onDecline ? onDecline() : onClose())}
          />
        </div>
      </>
    </Modal>
  );
};

export default ConfirmModal;
