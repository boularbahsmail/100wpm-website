import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/Why-Choose-Us';
import Work from '../components/Work';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevJam - Home</title>
        <meta name="description" content="Official website of DevJam Challenges community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Header />
        <Hero />
        <About />
        <WhyChooseUs />
        <Work />
      </div>
    </div>
  )
}
