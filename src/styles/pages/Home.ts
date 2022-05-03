import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  gap: 9rem;
  width: 80%;
  max-width: 1280px;
`;

export const Presentation = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  margin-top: 5%;
  flex-direction: column;

  h1 {
    color: var(--blue-800);
    font: 600 5rem Barlow, sans-serif;
    line-height: 4.5rem;
    margin-bottom: 2.5rem;
  }

  span {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }
`;

export const Cities = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
`;

type ColumnProps = {
  position: 'left' | 'right';
};

export const Column = styled.div<ColumnProps>`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 2rem;

  ${props =>
    props.position === 'right' &&
    css`
      margin-top: 5rem;
    `}
`;
