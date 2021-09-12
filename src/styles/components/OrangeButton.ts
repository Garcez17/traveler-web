import styled from 'styled-components';

export const Container = styled.button`
  height: 4.5rem;
  width: 100%;
  border: 0;

  font-family: 'Barlow';
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--white);
  background: var(--orange-500);
  border-radius: 0.625rem;

  transition: filter 0.2s;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  :not(:disabled):hover {
    filter: brightness(0.9);
  }
`;
