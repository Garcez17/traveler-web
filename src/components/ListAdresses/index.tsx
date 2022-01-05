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
  children,
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
      {children}
    </Container>
  );
}
