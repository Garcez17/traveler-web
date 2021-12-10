import { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export type ModalContainerProps = ModalProps & {
  children: ReactNode;
};

export type AddCommentModalProps = ModalProps;

export type ViewCommentsModalProps = ModalProps & {
  openAddCommentModal?: () => void;
};
