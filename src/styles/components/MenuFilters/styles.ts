import styled from 'styled-components';

export const Container = styled.div`
  height: 1.8rem;
  display: flex;

  button:nth-child(2) {
    padding: 0 2rem;
  }

  button + button:not(:nth-child(4)) {
    padding: 0 2rem;
  }
`;

type MenuButtonProps = {
  selected: boolean;
};

export const MenuButton = styled.button<MenuButtonProps>`
  height: 100%;
  display: flex;
  align-items: flex-start;
  background: transparent;
  border: 0;
  border-bottom: ${props =>
    props.selected
      ? '2px solid var(--orange-500)'
      : '1px solid var(--gray-100)'};

  font-family: 'Roboto';
  font-weight: ${props => (props.selected ? '700' : '400')};
  color: ${props => (props.selected ? 'var(--blue-800)' : 'var(--gray-300)')};
  font-size: 1rem;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const MenuSelect = styled.select<MenuButtonProps>`
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: flex-start;
  border: 0;
  border-bottom: ${props =>
    props.selected
      ? '2px solid var(--orange-500)'
      : '1px solid var(--gray-100)'};
  font-family: 'Roboto';
  font-weight: ${props => (props.selected ? '700' : '400')};
  color: ${props => (props.selected ? 'var(--blue-800)' : 'var(--gray-300)')};
  font-size: 1rem;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.8);
  }
`;
