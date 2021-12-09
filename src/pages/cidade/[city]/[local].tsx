import Image from 'next/image';
import { Header } from '../../../components/Header';
import {
  Container,
  Content,
  Wrapper,
  LocalImageContainer,
} from '../../../styles/pages/Local';

export default function Local() {
  return (
    <Container>
      <Content>
        <Header type="BACK" />
        <Wrapper>
          <h1>Doces & Companhia</h1>
        </Wrapper>
      </Content>
      <LocalImageContainer>
        <Image src="/foto.png" layout="fill" />
      </LocalImageContainer>
    </Container>
  );
}
