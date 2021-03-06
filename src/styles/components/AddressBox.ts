import styled from 'styled-components';

type ContainerProps = {
  isLarge: boolean;
  type: 'default' | 'editable' | 'info' | 'home';
  available?: boolean;
};

export const Container = styled.div<ContainerProps>`
  max-width: ${props => (props.isLarge ? '19rem' : '16rem')};
  opacity: ${props => (props.available ? '1' : '0.5')};
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 1rem;
  border: 1px solid var(--gray-100);

  img {
    border-radius: 1rem 1rem 0 0;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 13.75rem;
  position: relative;
`;

export const InfoContainer = styled.section`
  flex: 1;
  padding: 0.5rem 0;
`;

type InfoProps = {
  isLarge: boolean;
};

export const Info = styled.div<InfoProps>`
  display: flex;
  flex-direction: column;
  height: 5rem;
  gap: 0.5rem;
  padding: 0 2rem;
  margin-top: -0.5rem;

  justify-content: center;

  strong {
    font-weight: 600;
    font-size: ${props => (props.isLarge ? '1.5rem' : '1.25rem')};
    color: var(--blue-800);
  }

  span {
    font-family: Roboto, sans-serif;
    color: var(--gray-500);
  }

  & + div {
    border-top: 1px solid var(--gray-100);

    align-items: center;
    justify-content: space-between;

    flex-direction: row;

    svg {
      color: var(--orange-500);
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const Rating = styled.div`
  position: absolute;
  width: 3.25rem;
  height: 4.5rem;
  background: var(--orange-500);
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  top: -1rem;
  left: 1.25rem;

  color: var(--white);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.25rem;
  }
`;
