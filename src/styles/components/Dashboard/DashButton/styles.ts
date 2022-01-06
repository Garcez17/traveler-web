import styled from 'styled-components';

type ContainerProps = {
  btnColor: 'red' | 'green';
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 2rem;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  background: ${props =>
    props.btnColor === 'green' ? 'var(--green-500)' : 'var(--red-500)'};

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
