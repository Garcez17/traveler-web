import styled from 'styled-components';

export const Container = styled.main`
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
