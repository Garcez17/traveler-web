import Image from 'next/image';

import { Header } from '../components/Header';
import { OrangeButton } from '../components/OrangeButton';

import {
  Container,
  Main,
  Presentation,
  Cities,
  Column,
  City,
  Info,
} from '../styles/pages/Home';

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header hasBorder={false} />
      <Main>
        <Presentation>
          <h1>Viva uma grande aventura</h1>
          <span>
            Descubra locais incríveis para se visitar em cidades maravilhosas do
            Brasil!
          </span>
          <OrangeButton>Descobrir todos os lugares</OrangeButton>
        </Presentation>
        <Cities>
          <Column position="left">
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
          </Column>
          <Column position="right">
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
            <City>
              <Image src="/blumenau.png" width={270} height={220} />
              <Info>
                <strong>Florianópolis</strong>
                <span>98 locais</span>
              </Info>
            </City>
          </Column>
        </Cities>
      </Main>
    </Container>
  );
}
