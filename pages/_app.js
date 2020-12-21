import React from 'react'
import '../lib/css/index.css'
import Head from 'next/head'
import theme from '../lib/theme/index'
import { ThemeProvider } from 'theme-ui'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='favicon/safari-pinned-tab.svg'
            color='#ffffff'
          />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
