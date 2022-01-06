import { AddressBox } from '../../../components/AddressBox';
import { ContainerDashboard } from '../../../components/Dashboard';
import { ContainerAddress } from '../../../styles/components/ListAdresses/styles';
import { Container } from '../../../styles/pages/Dashboard/Cities/styles';

export default function Cities(): JSX.Element {
  const test = [
    'Água Branca',
    'Anadia',
    'Arapiraca',
    'Atalaia',
    'Barra de Santo Antônio',
    'Barra de São Miguel',
    'Batalha',
    'Belém',
    'Belo Monte',
    'Boca da Mata',
    'Branquinha',
    'Cacimbinhas',
    'Cajueiro',
    'Campestre',
    'Campo Alegre',
    'Campo Grande',
    'Canapi',
    'Capela',
    'Carneiros',
    'Chã Preta',
    'Coité do Nóia',
    'Colônia Leopoldina',
    'Coqueiro Seco',
    'Coruripe',
    'Craíbas',
  ];

  return (
    <ContainerDashboard>
      <Container>
        <ContainerAddress>
          {test.map(city => (
            <AddressBox title={city} key={city} />
          ))}
        </ContainerAddress>
      </Container>
    </ContainerDashboard>
  );
}
