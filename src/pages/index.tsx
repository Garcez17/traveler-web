import { Header } from '../components/Header';

import {
  Container,
  Main,
  Presentation,
  SearchPlacesButton,
  Cities,
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
            mundo!
          </span>
          <SearchPlacesButton>Descobrir todos os lugares</SearchPlacesButton>
        </Presentation>
        <Cities>
          <div />
        </Cities>
      </Main>
    </Container>
  );
}
