import { ReactNode } from 'react';

export type ModalContainerProps = {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
};

export type AddCommentModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};
