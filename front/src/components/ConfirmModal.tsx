import Button from "./Button";
import Modal from "./Modal";

interface ConfirmModalProps {
    isOpen: boolean;
    close: () => any;
    onConfirm: () => any;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}

const ConfirmModal = ({
    isOpen,
    close,
    onConfirm,
    message = "Are you sure?",
    confirmText = "Yes",
    cancelText = "No",
}: ConfirmModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            close={close}
            className="relative rounded-btn w-96 h-32 flex flex-col items-center justify-center"
        >
            <>
                <h1 className="mb-5">{message}</h1>
                <div className="flex gap-4">
                    <Button
                        text={confirmText}
                        onClick={onConfirm}
                        inverse={true}
                    />
                    <Button text={cancelText} onClick={close} />
                </div>
            </>
        </Modal>
    );
};

export default ConfirmModal;
