import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  width: 6rem;
  display: flex;
  flex-direction: column;
  background: var(--orange-500);
  padding: 2rem 0;
  color: var(--white);

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  header,
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }
`;
