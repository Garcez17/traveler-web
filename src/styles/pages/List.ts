import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Wrapper = styled.main`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
`;

export const Content = styled.main`
  width: 80%;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 0;

  h1 {
    font-size: 2.25rem;
    color: var(--blue-800);
    font-family: 'Barlow';
    font-weight: 600;
  }
`;

export const MenuOptions = styled.div`
  height: 1.8rem;
  display: flex;

  button:nth-child(2) {
    padding: 0 2rem;
  }

  button + button:not(:nth-child(4)) {
    padding: 0 2rem;
  }
`;

type MenuOptionsProps = {
  selected: boolean;
};

export const MenuButton = styled.button<MenuOptionsProps>`
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

export const MenuSelect = styled.select<MenuOptionsProps>`
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

export const ContainerAddress = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2rem;
`;

export const NotFoundContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem;

    display: flex;
    flex-direction: column;

    span {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
  }
`;
