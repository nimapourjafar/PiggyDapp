import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Piggy Dapp</title>
        <meta name="description" content="A fun test net library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Piggy Dapp
        </h1>
        <p >
          A fun way to win testnet funds!
        </p>
        <Image src={"/piggybank.png"} width={300} height={300} />

        <button>
          Join the lottery
        </button>

        <p>
          Last winner:
        </p>
        <p>
          Current pool:
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.nimapourjafar.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️{' '} by Nima
        </a>
      </footer>
    </div>
  )
}
