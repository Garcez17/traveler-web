import Link from 'next/link';
import {
  Container,
  Wrapper,
  RescrictButton,
} from '../styles/components/Header';

import Logo from '../assets/logo.svg';

type HeaderProps = {
  hasBorder?: boolean;
};

export function Header({ hasBorder = true }: HeaderProps): JSX.Element {
  return (
    <Container hasBorder={hasBorder}>
      <Wrapper>
        <Logo />
        <Link href="/login" passHref>
          <RescrictButton>Acesso Restrito</RescrictButton>
        </Link>
      </Wrapper>
    </Container>
  );
}
