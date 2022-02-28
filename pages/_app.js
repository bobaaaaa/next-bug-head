import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <meta content="_app.js" />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
