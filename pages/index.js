import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Reloader from "../components/reloader"

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
          { /* TODO make this every day or so, maybe check if build is updated first */}
          <Reloader durationMs={30000}/>

          <video autoPlay loop muted className={styles.video_container}>
            <source src="/catnip_mice.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </main>
    </div>
  )
}
