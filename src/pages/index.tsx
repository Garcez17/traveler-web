import Link from 'next/link';
import { AddressBox } from '../components/AddressBox';

import { Header } from '../components/Header';
import { OrangeButton } from '../components/OrangeButton';

import {
  Container,
  Main,
  Presentation,
  Cities,
  Column,
} from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header hasBorder={false} hasActionBar={false} />
      <Main>
        <Presentation>
          <h1>Viva uma grande aventura</h1>
          <span>
            Descubra locais incríveis para se visitar em cidades maravilhosas do
            Brasil!
          </span>
          <Link href="/lista">
            <a>
              <OrangeButton>Descobrir todos os lugares</OrangeButton>
            </a>
          </Link>
        </Presentation>
        <Cities>
          <Column position="left">
            <AddressBox size="home" />
            <AddressBox size="home" />
            <AddressBox size="home" />
          </Column>
          <Column position="right">
            <AddressBox size="home" />
            <AddressBox size="home" />
            <AddressBox size="home" />
            <AddressBox size="home" />
          </Column>
        </Cities>
      </Main>
    </Container>
  );
}
