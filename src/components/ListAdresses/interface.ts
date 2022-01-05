import { ReactNode } from 'react';
import { FilterButton } from '../MenuFilters/interface';

export type ListAdressesProps = {
  title: string;
  filterButtons: FilterButton[];
  adresses: any[];
  unvailableAdresses?: any[];
  children: ReactNode;
};
