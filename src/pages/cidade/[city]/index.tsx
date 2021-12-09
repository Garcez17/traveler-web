import Image from 'next/image';
import { FiAlertCircle, FiCalendar, FiCamera, FiCoffee } from 'react-icons/fi';

import { AddressBox } from '../../../components/AddressBox';
import { Header } from '../../../components/Header';
import { ListAdresses } from '../../../components/ListAdresses';

import {
  Wrapper,
  ImageContainer,
  InfoCityContainer,
  Info,
  InfoBoxContainer,
  InfoBox,
  BoxHeader,
  BoxInfo,
  Rating,
  FlexAddressContainer,
  HighLight,
  InfoHighLight,
  IconHighLight,
  ImageHighLight,
} from '../../../styles/pages/City';
import { Container } from '../../../styles/pages/Home';

export default function City(): JSX.Element {
  const test = [
    'Água Branca',
    'Anadia',
    'Arapiraca',
    'Atalaia',
    'Barra de Santo Antônio',
    'Barra de São Miguel',
    'Batalha',
    'Belém',
    'Belo Monte',
    'Boca da Mata',
    'Branquinha',
    'Cacimbinhas',
    'Cajueiro',
    'Campestre',
    'Campo Alegre',
    'Campo Grande',
    'Canapi',
    'Capela',
    'Carneiros',
    'Chã Preta',
    'Coité do Nóia',
    'Colônia Leopoldina',
    'Coqueiro Seco',
    'Coruripe',
    'Craíbas',
  ];

  return (
    <Container>
      <Header type="WITH_INFO" />
      <Wrapper>
        <ImageContainer>
          <Image src="/banner.png" layout="fill" />
        </ImageContainer>
        <InfoCityContainer>
          <Info>
            <h1>Frorianópolis</h1>
            <p>
              Capital do estado de Santa Catarina no sul do Brasil, é
              maioritariamente constituída pela Ilha de Santa Catarina, com 54
              km de comprimento.
            </p>
            <span>
              É famosa pelas suas praias, incluindo estâncias turísticas
              populares como a Praia dos Ingleses na extremidade norte da ilha.
            </span>
          </Info>
          <InfoBoxContainer>
            <InfoBox>
              <BoxHeader>
                <FiCamera />
              </BoxHeader>
              <BoxInfo>
                <strong>67</strong>
                <span>Pontos Turísticos</span>
              </BoxInfo>
            </InfoBox>
            <InfoBox>
              <BoxHeader>
                <FiCoffee />
              </BoxHeader>
              <BoxInfo>
                <strong>20</strong>
                <span>Comida e Bebida</span>
              </BoxInfo>
            </InfoBox>
            <InfoBox>
              <BoxHeader>
                <FiCalendar />
              </BoxHeader>
              <BoxInfo>
                <strong>11</strong>
                <span>Eventos Organizados</span>
              </BoxInfo>
            </InfoBox>
          </InfoBoxContainer>
        </InfoCityContainer>
        <Rating>
          <h3>Top avaliados</h3>
          <FlexAddressContainer>
            <AddressBox title="Doce & Companhia" type="info" city="Salvador" />
            <AddressBox
              title="Lagoa da Conceição"
              type="info"
              city="Salvador"
            />
            <AddressBox title="Praia do Campeche" type="info" city="Salvador" />
            <AddressBox
              title="Expo Tatto Floripa"
              type="info"
              city="Salvador"
            />
          </FlexAddressContainer>
        </Rating>
        <HighLight>
          <InfoHighLight>
            <IconHighLight>
              <FiAlertCircle />
              <p>Destaque</p>
            </IconHighLight>
            <h3>Praia dos Ingleses</h3>
            <p>
              Uma parte do paraíso na terra. Frequentemente com águas claras em
              tons verdes e azuis. Um dos locais mais preferidos por turistas e
              viajantes.
            </p>
          </InfoHighLight>
          <ImageHighLight>
            <Image src="/banner.png" layout="fill" />
          </ImageHighLight>
        </HighLight>

        <ListAdresses
          title="Conheça todos"
          adresses={test}
          filterButtons={[
            {
              name: 'Todos',
            },
            {
              name: 'Pontos Turísticos',
            },
            {
              name: 'Comida & Bebida',
            },
            {
              name: 'Eventos Organizados',
            },
          ]}
        />
      </Wrapper>
    </Container>
  );
}
