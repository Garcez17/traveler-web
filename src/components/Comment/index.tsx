import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

import {
  Container,
  PhotoContainer,
  Content,
  Title,
  Stars,
} from '../../styles/components/Comment/styles';

export function Comment(): JSX.Element {
  return (
    <Container>
      <PhotoContainer>
        <Image src="/user.png" layout="fill" />
      </PhotoContainer>
      <Content>
        <Title>
          <strong>Maria Eduarda</strong>
          <Stars>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Stars>
        </Title>
        <p>
          Todos os produtos comercializados são de excelente qualidade,
          recomendo!
        </p>
      </Content>
    </Container>
  );
}
