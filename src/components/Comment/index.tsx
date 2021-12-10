import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

import {
  Container,
  PhotoContainer,
  Content,
  Title,
  Stars,
} from '../../styles/components/Comment/styles';
import { CommentProps } from './interface';

export function Comment({
  positionStars = 'title',
}: CommentProps): JSX.Element {
  return (
    <Container>
      <PhotoContainer>
        <Image src="/user.png" layout="fill" />
      </PhotoContainer>
      <Content>
        <Title>
          <strong>Maria Eduarda</strong>

          {positionStars === 'title' && (
            <Stars>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Stars>
          )}
        </Title>
        <p>
          Todos os produtos comercializados são de excelente qualidade,
          recomendo!
        </p>
        {positionStars === 'footer' && (
          <Stars>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Stars>
        )}
      </Content>
    </Container>
  );
}
