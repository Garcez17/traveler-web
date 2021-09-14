import { AppProps } from 'next/app';

import { AppProvider } from '../contexts';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp;
