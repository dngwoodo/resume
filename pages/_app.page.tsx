import type { AppProps } from 'next/app';

import HeaderContainer from '../layouts/HeaderContainer';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderContainer />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
