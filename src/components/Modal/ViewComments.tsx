import { FiMessageSquare, FiX } from 'react-icons/fi';
import { ModalContainer } from '.';
import { Comment } from '../Comment';
import { ViewCommentsModalProps } from './interface';

import {
  Container,
  HeaderModal,
  ContentModal,
  Comments,
} from '../../styles/components/Modal/ViewComments/styles';

export function ViewCommentsModal({
  isOpen,
  onRequestClose,
  openAddCommentModal,
}: ViewCommentsModalProps): JSX.Element {
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <HeaderModal>
          <div>
            <strong>Nota 4,5</strong>
            <p>
              <FiMessageSquare />
              23 comentários
            </p>
          </div>

          <div>
            <button type="button" onClick={openAddCommentModal}>
              Adicionar avaliação
            </button>

            <button type="button" onClick={onRequestClose}>
              <FiX />
            </button>
          </div>
        </HeaderModal>
        <ContentModal>
          <Comments>
            <Comment positionStars="footer" />
            <Comment positionStars="footer" />
            <Comment positionStars="footer" />
            <Comment positionStars="footer" />
            <Comment positionStars="footer" />
          </Comments>
        </ContentModal>
      </Container>
    </ModalContainer>
  );
}
