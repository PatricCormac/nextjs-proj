import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <main>
        <h1>
          Read{' '}
          <Link href="/posts/first-post">
            <a>first post</a>
          </Link>
        </h1>
      </main>
    </>
  )
}
