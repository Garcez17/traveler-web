import Modal from 'react-modal';
import { ModalContainerProps } from './interface';

export function ModalContainer({
  children,
  isOpen,
  onRequestClose,
}: ModalContainerProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {children}
    </Modal>
  );
}
