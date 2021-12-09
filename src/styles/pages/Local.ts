import styled from 'styled-components';
import { ContainerCss } from '../global';

export const Container = styled.div`
  ${ContainerCss}
  flex-direction: row;
  align-items: flex-start;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export const Wrapper = styled.div`
  padding: 4rem 9rem 4rem 8rem;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 5rem;
  overflow-y: auto;
`;

export const Section = styled.section`
  h1,
  h3,
  span {
    font-family: 'Barlow';
    color: var(--blue-800);
  }

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  > p {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);

  div {
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      color: var(--orange-500);
      font-weight: 600;
    }
  }

  button {
    font-size: 0.875rem;
    color: var(--gray-300);
    font-weight: 500;
    background: transparent;
    border: 0;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const GridBox = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

export const Contact = styled.div`
  display: flex;
  gap: 2rem;

  div {
    span {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
`;

export const WppButton = styled.button`
  padding: 0 2rem;
  border-radius: 0.5rem;
  border: none;
  background: var(--green-500);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: var(--white);
  font-size: 1rem;
  font-weight: 500;

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-100);
  padding: 1rem;
  background: var(--white);

  span:first-child {
    font-weight: 400;
  }

  span:last-child {
    font-weight: 700;
  }
`;

export const MapContainer = styled.div`
  margin: 2rem 0 1.5rem 0;
  height: 10rem;
  display: flex;
  border-radius: 0.5rem;
`;

export const SectionFooter = styled.footer``;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocalImageContainer = styled.aside`
  flex: 1;
  position: relative;
  height: 100%;
`;

export const Badge = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--white);
  z-index: 3;
  position: absolute;
  border: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 2rem;
  right: 9rem;

  svg {
    height: 2rem;
    width: 2rem;
    color: var(--orange-500);
  }
`;
