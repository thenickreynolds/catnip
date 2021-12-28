import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catnip</title>
        <meta name="description" content="Catnip for your cat (and for you)" />
        <link rel="apple-touch-icon" sizes="180x180" href="/paw_favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/paw_favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/paw_favicon/favicon-16x16.png" />
        <link rel="manifest" href="/paw_favicon/site.webmanifest" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <video width="320" height="240" controls>
            <source src="/catnip_mice.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
