import Image from 'next/image';
import Link from 'next/link';
import { FiCoffee } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

import {
  Container,
  Rating,
  ImageContainer,
  InfoContainer,
  Info,
} from '../../styles/components/AddressBox';

type AddressBoxProps = {
  type?: 'default' | 'editable' | 'info' | 'home';
  available?: boolean;
  title: string;
  city?: string;
};

export function AddressBox({
  type = 'default',
  available = true,
  city,
  title,
}: AddressBoxProps): JSX.Element {
  return (
    <Container isLarge={type === 'home'} type={type} available={available}>
      <Link
        href={type === 'info' ? `/cidade/${city}/${title}` : `/cidade/${title}`}
      >
        <a>
          {type === 'info' && (
            <Rating>
              <AiFillStar />
              4,7
            </Rating>
          )}
          <ImageContainer>
            <Image src="/blumenau.png" layout="fill" />
          </ImageContainer>
          <InfoContainer>
            <Info isLarge={type === 'home'}>
              <strong>{title ?? 'Salvador'}</strong>
              {type !== 'info' && <span>98 locais</span>}
            </Info>
            {type === 'info' && (
              <Info isLarge={false}>
                <span>Comida e Bebida</span>
                <FiCoffee />
              </Info>
            )}
          </InfoContainer>
        </a>
      </Link>
    </Container>
  );
}
