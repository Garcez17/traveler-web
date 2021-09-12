import styled from 'styled-components';

type ContainerProps = {
  hasBorder: boolean;
};

export const Container = styled.header<ContainerProps>`
  width: 100%;
  display: flex;
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
