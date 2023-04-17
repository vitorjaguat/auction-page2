import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Listing from '../components/Listing';
import Connect from '../components/Connect';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showListings, setShowListings] = useState(false);

  useEffect(() => {
    setShowListings(true);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Marketplace do Antílope</title>
        <meta name='description' content='Marketplace do Antílope Cerejinha' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {/* -- Add Connect Widget -- */}
        <Connect network={process.env.NEXT_APP_NETWORK} />
        <br />

        {/* ~~ Add Marketplace Widget component ~~ */}
        <Listing
          id={5155}
          // network={process.env.NEXT_APP_NETWORK}
          // id={'4250'}
          network={'1'}
        />
      </main>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
