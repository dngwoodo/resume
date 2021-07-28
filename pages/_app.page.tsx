import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import HeaderContainer from '../layouts/HeaderContainer';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeaderContainer />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
