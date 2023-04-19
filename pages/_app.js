import '../styles/globals.css';
import '../styles/marketplace.css';
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import localFont from '@next/font/local';

const din = localFont({
  src: [
    { path: '../public/fonts/din-regular.woff2', weight: '400' },
    { path: '../public/fonts/din-bold.woff2', weight: '800', style: 'bold' },
    { path: '../public/fonts/din-italic.woff2', style: 'italic' },
    { path: '../public/fonts/din-light.woff2', style: 'light', weight: '100' },
  ],
  variable: '--din-font',
  display: 'block',
});

function MyApp({ Component, pageProps }) {
  /**
   * NOTE: prior to v3 of marketplace widgets, it was necessary to trigger the `m-refresh-widgets`
   * event when dynamically changing elements on the page/routes.
   * See the docs for more details: https://docs.manifold.xyz/v/manifold-for-developers/resources/widgets/marketplace-widgets/window-events
   */
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url, { shallow }) => {
  //     // Note: need to trigger a m-refresh-widgets event every time the URL changes client side
  //     window.dispatchEvent(new Event('m-refresh-widgets'));
  //   };
  //   router.events.on('routeChangeStart', handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, []);

  return (
    <main className={`${din.variable} font-din`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
