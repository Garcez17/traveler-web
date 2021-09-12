import { Container } from '../styles/components/OrangeButton';

type OrangeButtonProps = {
  children: string;
  isActive?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

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
