import { useEffect, useState } from 'react';
import { AddressBox } from '../components/AddressBox';
import { Header } from '../components/Header';
import { ListAdresses } from '../components/ListAdresses';
import { useSearch } from '../hooks/useSearch';
import {
  ContainerAddress,
  NotFoundContainer,
} from '../styles/components/ListAdresses/styles';

import { Container, Wrapper } from '../styles/pages/List';

export default function List(): JSX.Element {
  const { search } = useSearch();

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

  const [cities, setCities] = useState(test);
  const [otherCities, setOtherCities] = useState([]);

  useEffect(() => {
    const filteredCities = test.filter(city => {
      if (city.toLowerCase().includes(search?.toLowerCase())) {
        return city;
      }

      return null;
    });

    const remainingCities = test.filter(city => {
      if (!city.toLowerCase().includes(search?.toLowerCase())) {
        return city;
      }

      return null;
    });

    setCities(filteredCities);
    setOtherCities(remainingCities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Container>
      <Header type="SEARCH_BAR" />
      <Wrapper>
        <ListAdresses
          title="Selecione uma cidade"
          adresses={cities}
          unvailableAdresses={otherCities}
          filterButtons={[
            {
              name: 'Todas',
            },
            {
              name: 'Mais acessadas',
            },
            {
              name: 'order',
              isSelect: true,
              options: ['A-Z', 'test-1', 'test-2'],
            },
          ]}
        >
          {cities.length > 0 ? (
            <ContainerAddress>
              {cities.map(city => (
                <AddressBox title={city} key={city} />
              ))}
              {otherCities.map(city => (
                <AddressBox title={city} key={city} available={false} />
              ))}
            </ContainerAddress>
          ) : (
            <NotFoundContainer>
              <p>
                <span>😕</span>
                Sem resultados. <br /> Tente uma nova busca
              </p>
            </NotFoundContainer>
          )}
        </ListAdresses>
      </Wrapper>
    </Container>
  );
}
