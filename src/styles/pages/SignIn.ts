import styled, { keyframes } from 'styled-components';

import {
  FiAlertCircle,
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiCheck,
} from 'react-icons/fi';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  img {
    width: 50%;
  }
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  flex: 1;
  padding: 2rem 0 6rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackButton = styled(FiArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-300);

  transition: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Form = styled.form`
  h1 {
    font-family: 'Barlow';
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--blue-800);
  }
  margin-bottom: 2rem;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignInInput = styled.div`
  width: 26rem;
  height: 4.5rem;
  background: var(--white);
  border: 1px solid var(--gray-100);
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;

  :not(& + &) {
    border-radius: 1rem 1rem 0 0;
  }

  & + & {
    border-radius: 0 0 1rem 1rem;
  }

  button {
    border: 0;
    background: transparent;
    margin-left: 1rem;
  }
`;

const appearFromDown = keyframes`
  from {
    opacity: 0;
    font-size: 1rem;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const disappearToDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    font-size: 1rem;
    transform: translateY(25px);
  }
`;

type LabelInputProps = {
  showLabel: boolean;
};

export const LabelInput = styled.div<LabelInputProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--gray-300);
    position: ${props => (props.showLabel ? 'static' : 'absolute')};

    visibility: ${props => (props.showLabel ? 'visible' : 'hidden')};
    animation: ${props => (props.showLabel ? appearFromDown : disappearToDown)}
      0.1s linear;
    transition: visibility 0.1s linear;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    outline: none;
    color: var(--gray-500);

    ::placeholder {
      font: 400 1rem 'Heebo';
      color: var(--gray-300);
    }

    :focus::placeholder {
      color: transparent;
    }
  }
`;

export const ShowPassword = styled(FiEye)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-300);
`;

export const HidePassword = styled(FiEyeOff)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--orange-500);
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 2rem 0;

  > div {
    display: flex;

    label {
      display: flex;
      color: var(--gray-300);
      cursor: pointer;

      transition: filter 0.2s;

      :hover {
        filter: brightness(0.95);
      }
    }

    input[type='checkbox'] {
      display: none;
    }
  }

  a {
    color: var(--gray-300);

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

type CheckboxProps = {
  isCheckboxChecked: boolean;
};

export const Checkbox = styled.div<CheckboxProps>`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--gray-100);
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: ${props =>
    props.isCheckboxChecked ? 'var(--green-500)' : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props =>
      props.isCheckboxChecked ? 'var(--white)' : 'transparent'};
  }
`;

export const CheckIcon = styled(FiCheck)`
  width: 0.85rem;
  height: 0.85rem;
`;

export const Footer = styled.div`
  display: flex;
  gap: 1.5rem;

  align-items: center;
`;

export const AlertIcon = styled(FiAlertCircle)`
  width: 2rem;
  height: 2rem;
  color: var(--orange-500);
`;
