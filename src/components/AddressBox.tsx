import Image from 'next/image';
import Link from 'next/link';
import { FiCoffee } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

import {
  Container,
  Rating,
  ImageContainer,
  Info,
} from '../styles/components/AddressBox';

type AddressBoxProps = {
  size?: 'home' | 'default';
  type?: 'default' | 'editable' | 'info';
  available?: boolean;
  title: string;
  city?: string;
};

export function AddressBox({
  size = 'default',
  type = 'default',
  available = true,
  city,
  title,
}: AddressBoxProps): JSX.Element {
  return (
    <Container size={size} type={type} available={available}>
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
          <Info size={size}>
            <strong>{title ?? 'Salvador'}</strong>
            {type !== 'info' && <span>98 locais</span>}
          </Info>
          {type === 'info' && (
            <Info size={size}>
              <span>Comida e Bebida</span>
              <FiCoffee />
            </Info>
          )}
        </a>
      </Link>
    </Container>
  );
}
