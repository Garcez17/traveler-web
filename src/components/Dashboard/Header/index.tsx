import { FiPlus } from 'react-icons/fi';
import { Container } from '../../../styles/components/Dashboard/DashHeader/styles';
import { DashButton } from '../Button';

export function DashHeader(): JSX.Element {
  return (
    <Container>
      <h1>Cities</h1>

      <DashButton>
        <FiPlus />
        Adicionar um perfil
      </DashButton>
    </Container>
  );
}
