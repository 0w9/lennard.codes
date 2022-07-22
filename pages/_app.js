import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return 
      <>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-0SQ7C0EDQQ`} />

        <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', G-0SQ7C0EDQQ', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
        
        
        <Head>
            <title>Welcome!</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Component {...pageProps} />
      </>
}

export default MyApp;
