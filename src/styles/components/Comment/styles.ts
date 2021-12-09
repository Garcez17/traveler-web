import styled from 'styled-components';

export const Container = styled.div`
  /* height: 8rem; */
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0 1rem 0;

  & + & {
    :after {
      content: '';
      width: 80%;
      top: 0;
      right: 0;
      height: 1px;
      background: var(--gray-100);
      position: absolute;
    }
  }
`;

export const PhotoContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.25rem;

  svg {
    color: var(--orange-500);
    width: 1.25rem;
    height: 1.25rem;
  }
`;
