import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevJam Challenges - Home</title>
        <meta name="description" content="Official website of DevJam Challenges community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Header />
        <Hero />
        <About />
      </div>
    </div>
  )
}
