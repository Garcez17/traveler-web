import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  border-radius: 1rem;
  height: 32rem;
  width: 46rem;
  display: flex;
  flex-direction: column;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.875rem 2.5rem;
  background: var(--white);
  border-bottom: 1px solid var(--gray-100);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    strong {
      font-size: 1.5rem;
      color: var(--orange-500);
      font-family: 'Barlow';
    }

    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      font-family: 'Barlow';

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }
    }

    button:first-child {
      font-size: 0.875rem;
      border: 0;
      background: transparent;
      color: var(--gray-500);
      font-weight: 500;
    }

    button:last-child {
      height: 2.5rem;
      width: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--gray-100);
      background: transparent;
      border-radius: 0.5rem;

      svg {
        height: 1.25rem;
        width: 1.25rem;
        color: var(--gray-300);
      }
    }
  }
`;

export const ContentModal = styled.div`
  flex: 1;
  padding: 0 2.5rem;
  overflow-y: auto;
`;

export const Comments = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 2.5rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
    background: rgba(18, 57, 82, 0.2);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--blue-600);
    border-radius: 0.5rem;

    :hover {
      background: var(--blue-800);
    }
  }
`;
