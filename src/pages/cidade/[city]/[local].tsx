import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FiCoffee } from 'react-icons/fi';
import { Comment } from '../../../components/Comment';

import { Header } from '../../../components/Header';
import { AddCommentModal } from '../../../components/Modal/AddComment';
import { ViewCommentsModal } from '../../../components/Modal/ViewComments';

import {
  Container,
  Content,
  Wrapper,
  Section,
  Title,
  GridBox,
  Contact,
  WppButton,
  Box,
  MapContainer,
  SectionFooter,
  CommentsContainer,
  LocalImageContainer,
  Badge,
} from '../../../styles/pages/Local';

export default function Local(): JSX.Element {
  const [modalAddCommentIsOpen, setModalAddCommentIsOpen] = useState(false);
  const [modalViewCommentIsOpen, setModalViewCommentIsOpen] = useState(false);

  function handleOpenAddCommentModal() {
    setModalViewCommentIsOpen(false);
    setModalAddCommentIsOpen(true);
  }

  const Map = useMemo(
    () =>
      dynamic(
        () =>
          import('../../../components/Map').then(component => component.Map),
        {
          loading: () => <p>A map is loading</p>,
          ssr: false,
        },
      ),
    [],
  );

  return (
    <Container>
      {modalViewCommentIsOpen && (
        <ViewCommentsModal
          isOpen={modalViewCommentIsOpen}
          onRequestClose={() => setModalViewCommentIsOpen(false)}
          openAddCommentModal={handleOpenAddCommentModal}
        />
      )}
      {modalAddCommentIsOpen && (
        <AddCommentModal
          isOpen={modalAddCommentIsOpen}
          onRequestClose={() => setModalAddCommentIsOpen(false)}
        />
      )}
      <Content>
        <Header type="BACK" />
        <Wrapper>
          <Section>
            <h1>Doce & Companhia</h1>

            <p>
              O melhor lugar da cidade para você tomar um bom café. Fatias de
              tortas artesanais, bolos, lanches e biscoitos caseiros.
            </p>
          </Section>
          <Section>
            <Title>
              <h3>Atendimento</h3>
            </Title>
            <GridBox>
              <Box>
                <span>Domingo</span>
                <span>Fechado</span>
              </Box>
              <Box>
                <span>Segunda</span>
                <span>8h - 19h</span>
              </Box>
              <Box>
                <span>Terça</span>
                <span>8h - 19h</span>
              </Box>
              <Box>
                <span>Quarta</span>
                <span>8h - 19h</span>
              </Box>
              <Box>
                <span>Quinta</span>
                <span>8h - 19h</span>
              </Box>
              <Box>
                <span>Sexta</span>
                <span>8h - 19h</span>
              </Box>
              <Box>
                <span>Sábado</span>
                <span>8h - 17h</span>
              </Box>
            </GridBox>
            <Contact>
              <WppButton>
                <BsWhatsapp />
                Entrar em contato
              </WppButton>

              <div>
                <p>Telefone</p>
                <span>(47) 3598 7815</span>
              </div>
            </Contact>
          </Section>
          <Section>
            <Title>
              <h3>Endereço</h3>

              <button type="button">Ver no Google Maps</button>
            </Title>
            <MapContainer id="map">
              <Map />
            </MapContainer>
            <SectionFooter>
              <p>Rua 7 de Setembro, 319 - Jardim América</p>
              <p>89160-170</p>
            </SectionFooter>
          </Section>
          <Section>
            <Title>
              <div>
                <h3>Avaliações</h3>
                <span>
                  <AiFillStar />
                  4,5
                </span>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setModalAddCommentIsOpen(true)}
                >
                  Adicionar
                </button>
                <button
                  type="button"
                  onClick={() => setModalViewCommentIsOpen(true)}
                >
                  Ver todas
                </button>
              </div>
            </Title>
            <CommentsContainer>
              <Comment />
              <Comment />
              <Comment />
            </CommentsContainer>
          </Section>
        </Wrapper>
      </Content>
      <LocalImageContainer>
        <Badge>
          <FiCoffee />
        </Badge>
        <Image src="/foto.png" layout="fill" />
      </LocalImageContainer>
    </Container>
  );
}
