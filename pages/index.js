import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Listing from '../components/Listing';
import Connect from '../components/Connect';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

export default function Home() {
  const [showListings, setShowListings] = useState(false);

  useEffect(() => {
    setShowListings(true);
  }, []);

  return (
    <div className=''>
      <Head>
        <title>Marketplace do Antílope</title>
        <meta name='description' content='Marketplace do Antílope Cerejinha' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Section2 />
      <Section3 />

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
