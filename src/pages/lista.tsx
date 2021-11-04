import { useEffect, useState } from 'react';
import { AddressBox } from '../components/AddressBox';
import { Header } from '../components/Header';
import { useSearch } from '../hooks/useSearch';
import {
  Container,
  Wrapper,
  Content,
  ContentHeader,
  MenuOptions,
  MenuButton,
  MenuSelect,
  ContainerAddress,
  NotFoundContainer,
} from '../styles/pages/List';

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
  const [selectedInMenu, setSelectedInMenu] = useState(1);

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
      <Header actionType="searchBar" />
      <Wrapper>
        <Content>
          <ContentHeader>
            <h1>Selecione uma cidade</h1>

            <MenuOptions>
              <MenuButton
                type="button"
                selected={selectedInMenu === 1}
                onClick={() => setSelectedInMenu(1)}
              >
                Todas
              </MenuButton>
              <MenuButton
                type="button"
                selected={selectedInMenu === 2}
                onClick={() => setSelectedInMenu(2)}
              >
                Mais acessadas
              </MenuButton>
              <MenuSelect
                name="order"
                id="order_by"
                selected={selectedInMenu === 3}
                defaultValue="alphabetic"
              >
                <option value="alphabetic">A-Z</option>
                <option value="test">test1</option>
                <option value="test2">test2</option>
              </MenuSelect>
            </MenuOptions>
          </ContentHeader>
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
        </Content>
      </Wrapper>
    </Container>
  );
}
