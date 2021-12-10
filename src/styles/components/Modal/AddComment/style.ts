import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
  border-radius: 1rem;
`;

export const HeaderModal = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.875rem 2.5rem;
  background: var(--white);
  border-bottom: 1px solid var(--gray-100);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  h3 {
    font-size: 1.5rem;
    color: var(--blue-600);
  }

  button {
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
`;

export const ContentModal = styled.section`
  padding: 2.5rem;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormModalTitle = styled.div`
  display: flex;
  gap: 1rem;

  button {
    border: 0;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    background: var(--blue-800);
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }

  input {
    flex: 1;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    border: 1px solid var(--gray-100);
    outline: none;

    transition: border 0.05s;

    :focus {
      border: 1px solid var(--orange-500);
    }

    ::placeholder {
      color: var(--gray-300);
    }
  }
`;

export const TextareaModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 1px solid var(--gray-100);
  border-radius: 0.5rem;

  textarea {
    border-radius: 0.5rem;
    width: 41rem;
    height: 8rem;
    border: 0;
    resize: none;
    outline: none;
    padding: 1rem 1.5rem;

    ::placeholder {
      color: var(--gray-300);
    }
  }
`;

export const TextareaModalContainerFooter = styled.footer`
  align-self: flex-end;
  padding: 0.5rem 1rem;

  p {
    font-size: 0.75rem;
    color: var(--gray-300);
  }
`;

export const Note = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 500;
    color: var(--orange-500);
  }
`;

export const StarsButton = styled.div`
  display: flex;

  button:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  button:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  button {
    height: 3rem;
    width: 6.5rem;
    border: 1px solid var(--gray-100);
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }

    svg {
      height: 1.25rem;
      width: 1.25rem;
      color: var(--gray-300);
    }
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    svg {
      margin-right: 1.5rem;
      height: 2rem;
      width: 2rem;
      color: var(--orange-500);
    }
  }

  button {
    padding: 0.75rem 2rem;
    background: var(--green-500);
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;
    border: 0;
    border-radius: 0.5rem;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
