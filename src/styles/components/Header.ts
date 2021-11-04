import styled from 'styled-components';

type ContainerProps = {
  hasBorder: boolean;
};

export const Container = styled.header<ContainerProps>`
  width: 100%;
  display: flex;
  background: ${props => (props.hasBorder ? 'var(--white)' : 'transparent')};
  align-items: center;
  justify-content: center;
  border-bottom: ${props =>
    props.hasBorder ? '1px solid var(--gray-100)' : 'none'};
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 6rem;
  max-width: 1280px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RescrictButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  height: 3rem;
  width: 11rem;
  border-radius: 0.625rem;
  background: var(--blue-100);
  color: var(--blue-800);
  font: 500 1rem Heebo, sans-serif;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const ActionBar = styled.div`
  flex: 1;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 auto;
    font-size: 1.25rem;
    color: var(--gray-300);
  }
`;

type SearchInputProps = {
  hasText: boolean;
};

export const SearchInput = styled.div<SearchInputProps>`
  display: flex;
  align-items: center;
  width: 26rem;
  border-radius: 0.5rem;

  background: var(--background);
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);

  input {
    background: transparent;
    border: 0;
    outline: none;
    flex: 1;
    color: var(--blue-800);

    ::placeholder {
      color: var(--gray-300);
    }
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;

    transition: color 0.2s;
  }

  svg:first-child {
    margin-right: 1rem;

    color: ${props =>
      props.hasText ? 'var(--orange-500)' : 'var(--gray-300)'};
  }

  svg:last-child {
    cursor: pointer;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }
  }
`;

export const InfoContainer = styled.div`
  flex: 1;

  display: flex;
`;

export const BackButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-100);
  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--gray-300);
  }

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.95);
  }
`;
