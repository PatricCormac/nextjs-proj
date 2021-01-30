import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js App
        </h1>
        <Link href="/about"><a>About</a></Link>
      </main>
    </div>
  )
}
