import {
  Container,
  MenuButton,
  MenuSelect,
} from '../../styles/components/MenuFilters/styles';
import { MenuFiltersProps } from './interface';

export function MenuFilters({
  selectedInMenu,
  setSelectedInMenu,
  buttons,
}: MenuFiltersProps): JSX.Element {
  return (
    <Container>
      {buttons.map((btn, index) =>
        btn.isSelect ? (
          <MenuSelect
            name={btn.name}
            id="order_by"
            selected={selectedInMenu === index}
            defaultValue={btn.options[0]}
          >
            {btn.options.map(option => (
              <option value={option}>{option}</option>
            ))}
          </MenuSelect>
        ) : (
          <MenuButton
            type="button"
            selected={selectedInMenu === index}
            onClick={() => setSelectedInMenu(index)}
          >
            {btn.name}
          </MenuButton>
        ),
      )}
    </Container>
  );
}
