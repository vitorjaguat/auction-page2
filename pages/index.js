import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Listing from '../components/Listing';
import Connect from '../components/Connect';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Footer from '../components/Footer';
import Detail from '../components/Detail';

export default function Home() {
  const [showListings, setShowListings] = useState(false);

  useEffect(() => {
    setShowListings(true);
  }, []);

  return (
    <div className=''>
      {/* <Head>
        <title>Marketplace do Antílope</title>
        <meta name='description' content='Marketplace do Antílope Cerejinha' />
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <Hero />
      <Section2 />
      <Detail />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

// export function getStaticProps() {
//   return {
//     props: {},
//   };
// }
