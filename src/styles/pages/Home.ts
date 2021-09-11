import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Main = styled.main`
  flex: 1;
  overflow: none;
  display: flex;
  width: 80%;
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

export const SearchPlacesButton = styled.button`
  height: 4.5rem;
  border: 0;

  font-family: 'Barlow';
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--white);
  background: var(--orange-500);
  border-radius: 0.625rem;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Cities = styled.div`
  flex: 1;
`;
