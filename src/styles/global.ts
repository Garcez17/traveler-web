import { createGlobalStyle, css } from 'styled-components';

export const ContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export default createGlobalStyle`
  :root {
    --background: #F5F8FA;
    --green-500: #51B853;
    --white: #FFFFFF;
    --gray-100: #DCE2E6;
    --gray-300: #A0ACB3;
    --gray-500: #617480;
    --blue-100: #DDE9F0;
    --blue-600: #115D8C;
    --blue-800: #123952;
    --orange-500: #F25D27;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--gray-500);
    font: 400 1rem 'Heebo', 'Barlow', Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Heebo';

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  input, textarea {
    font: 400 1rem 'Heebo', sans-serif;
    color: var(--gray-500);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active
  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill
  {
    -webkit-text-fill-color: var(--gray-500) !important;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-300);

    :hover {
      background: var(--gray-500);
    }
  }

  .react-modal-overlay {
    background: rgba(18, 57, 82, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);
    z-index: 1000;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
