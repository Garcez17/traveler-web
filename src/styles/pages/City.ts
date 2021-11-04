import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 21rem;
  position: relative;
`;

export const InfoCityContainer = styled.div`
  display: flex;
  padding: 5rem 0;
  gap: 6.25rem;
  width: 80%;
  max-width: 1280px;
`;

export const Info = styled.div`
  flex: 1;

  h1 {
    font-size: 3.5rem;
    color: var(--blue-800);
    font-family: 'Barlow';
  }

  p {
    font-weight: 300;
    font-size: 1.25rem;
    color: var(--blue-800);
    margin: 1rem 0 2rem 0;
  }

  span {
    font-weight: 400;
  }
`;

export const InfoBoxContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 16.5rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 1.25rem;
`;

export const BoxHeader = styled.header`
  padding: 2rem;
  border-bottom: 1px solid var(--gray-100);

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--orange-500);
  }
`;

export const BoxInfo = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;

  strong {
    color: var(--blue-800);
    font-family: 'Barlow';
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
  }

  span {
    color: var(--gray-500);
    line-height: 1.375rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1280px;
  margin-bottom: 4rem;

  h3 {
    font-size: 2.25rem;
    color: var(--blue-800);
    margin-bottom: 2rem;
    font-family: 'Barlow';
  }
`;

export const FlexAddressContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const HighLight = styled.div`
  width: 80%;
  max-width: 1280px;
  background: var(--white);
  border-radius: 0.5rem;
  border: 1px solid var(--gray-100);
  margin-bottom: 2rem;

  display: flex;

  img {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

export const InfoHighLight = styled.div`
  flex: 1;
  height: 18rem;
  padding: 3rem 4rem;

  h3 {
    margin-top: 2rem;
    font-size: 2.25rem;
    color: var(--blue-800);
    font-family: 'Barlow';
  }

  > p {
    margin-top: 0.5rem;
  }
`;

export const IconHighLight = styled.div`
  width: 6.5rem;
  padding: 0.25rem 0.5rem;
  background: var(--orange-500);

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 1rem;

  svg {
    margin-right: 0.25rem;
    width: 1.25rem;
    height: 1.25rem;
  }

  > p {
    font-size: 0.875rem;
  }
`;

export const ImageHighLight = styled.div`
  position: relative;
  min-width: 50%;
`;
