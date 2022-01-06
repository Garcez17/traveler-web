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
  gap: 2rem;
  width: 80%;
  max-width: 1280px;
`;

export const Presentation = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  position: relative;
`;

type ColumnProps = {
  position: 'left' | 'right';
};

export const Column = styled.div<ColumnProps>`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 2rem;
  position: absolute;

  ${props =>
    props.position === 'right' &&
    css`
      right: 0;
      top: 5rem;
    `}
`;

export const City = styled.div`
  width: 19rem;
  height: 19.8rem;

  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 1rem;
  border: 1px solid var(--gray-100);

  img {
    border-radius: 1rem 1rem 0 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 6rem;
  gap: 0.5rem;
  padding: 0 2rem;

  justify-content: center;

  strong {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--blue-800);
  }

  span {
    font-family: Roboto, sans-serif;
  }
`;
