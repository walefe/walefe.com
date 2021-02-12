import React from 'react';
import { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
