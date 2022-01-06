import { Container } from '../../../styles/components/Dashboard/DashButton/styles';
import { DashButtonProps } from './interface';

export function DashButton({
  children,
  color = 'green',
  ...rest
}: DashButtonProps): JSX.Element {
  return (
    <Container btnColor={color} {...rest}>
      {children}
    </Container>
  );
}
