import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/Layouts/Theme'
import '../styles/globals.css'
import '../public/fonts/fonts.css'
import { domain } from '../settings'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>nakazato overflow</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="16x16"></link>
        <meta name="description" content="Nakazatoの技術ブログ"></meta>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#" />
        <meta property="og:title" content={"nakazato overflow"} />
        <meta property="og:type" content="blog" />
        <meta property="og:description" content={"Nakazatoの技術ブログ"} />
        <meta property="og:url" content={domain} />
        <meta property="og:site_name" content="nakazato overflow" />
        <meta property="og:image" content={`${domain}favicon.svg`} />
        <link rel="canonical" href={domain} />
        <meta name="twitter:card" content="website" />
        <meta name="twitter:title" content={"nakazato overflow"} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
