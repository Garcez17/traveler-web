import { SetStateAction } from 'react';

export type FilterButton =
  | {
      name: string;
      isSelect?: false;
    }
  | {
      name: string;
      isSelect: true;
      options: string[];
    };

export type MenuFiltersProps = {
  selectedInMenu: number;
  setSelectedInMenu: (value: SetStateAction<number>) => void;
  buttons: FilterButton[];
};
