// Libraries
import clsx from "clsx";

// Local
import Button from "./Button";
import Modal from "./Modal";

interface ConfirmModalProps {
    isOpen: boolean;
    close: () => void;
    onConfirm: () => void;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}

const css = clsx(
    "relative w-96 h-24",
    "flex flex-col items-center justify-center",
    "rounded-btn"
);

const ConfirmModal = ({
    isOpen,
    close,
    onConfirm,
    message = "Are you sure?",
    confirmText = "Yes",
    cancelText = "No",
}: ConfirmModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={close} className={css}>
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
