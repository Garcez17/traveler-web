import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiAlertCircle, FiX } from 'react-icons/fi';

import { ModalContainer } from '.';
import { AddCommentModalProps } from './interface';

import {
  Container,
  HeaderModal,
  ContentModal,
  FormModal,
  FormModalTitle,
  TextareaModalContainer,
  TextareaModalContainerFooter,
  Note,
  StarsButton,
  FooterModal,
} from '../../styles/components/Modal/AddComment/style';

export function AddCommentModal({
  isOpen,
  onRequestClose,
}: AddCommentModalProps): JSX.Element {
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <HeaderModal>
          <h3>Adicionar avaliação</h3>
          <button type="button" onClick={onRequestClose}>
            <FiX />
          </button>
        </HeaderModal>
        <ContentModal>
          <FormModal>
            <FormModalTitle>
              <button type="button">Upload da sua foto</button>
              <input type="text" placeholder="Seu nome completo" />
            </FormModalTitle>
            <TextareaModalContainer>
              <textarea placeholder="Escreva aqui..." />
              <TextareaModalContainerFooter>
                <p>Máximo 240 caracteres</p>
              </TextareaModalContainerFooter>
            </TextareaModalContainer>
          </FormModal>
          <Note>
            <span>Sua nota de 1 a 5</span>
            <StarsButton>
              <button type="button">
                <AiOutlineStar />
              </button>
              <button type="button">
                <AiOutlineStar />
              </button>
              <button type="button">
                <AiOutlineStar />
              </button>
              <button type="button">
                <AiOutlineStar />
              </button>
              <button type="button">
                <AiOutlineStar />
              </button>
            </StarsButton>
          </Note>
          <FooterModal>
            <p>
              <FiAlertCircle />
              Sua avaliação será analisada <br /> para poder ser publicada.
            </p>

            <button type="submit">Enviar avaliação</button>
          </FooterModal>
        </ContentModal>
      </Container>
    </ModalContainer>
  );
}
