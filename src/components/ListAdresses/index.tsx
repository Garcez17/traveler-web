import { useState } from 'react';
import { AddressBox } from '../AddressBox';
import { MenuFilters } from '../MenuFilters';

import { ListAdressesProps } from './interface';

import {
  Container,
  ContainerAddress,
  ContentHeader,
  NotFoundContainer,
} from '../../styles/components/ListAdresses/styles';

export function ListAdresses({
  adresses,
  unvailableAdresses = [],
  title,
  filterButtons,
}: ListAdressesProps): JSX.Element {
  const [selectedInMenu, setSelectedInMenu] = useState(0);

  return (
    <Container>
      <ContentHeader>
        <h1>{title}</h1>

        <MenuFilters
          selectedInMenu={selectedInMenu}
          setSelectedInMenu={setSelectedInMenu}
          buttons={filterButtons}
        />
      </ContentHeader>
      {adresses.length > 0 ? (
        <ContainerAddress>
          {adresses.map(city => (
            <AddressBox title={city} key={city} />
          ))}
          {unvailableAdresses.map(city => (
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
    </Container>
  );
}
