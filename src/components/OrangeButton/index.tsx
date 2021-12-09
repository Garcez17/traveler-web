import { Container } from '../../styles/components/OrangeButton';

import { OrangeButtonProps } from './interface';

export function OrangeButton({
  children,
  type = 'button',
  isActive = true,
}: OrangeButtonProps): JSX.Element {
  return (
    <Container type={type} disabled={!isActive}>
      {children}
    </Container>
  );
}
