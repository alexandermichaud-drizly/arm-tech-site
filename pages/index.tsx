import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Michaud</title>
        <meta name="description" content="Alexander Michaud, Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
};

export default Home;
