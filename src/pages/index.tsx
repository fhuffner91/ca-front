import Head from "next/head"
import Link from "next/link"
export default function Home() {
  return (
    <>
    <Head>
    <title>Clube Atacadão</title>
    </Head>
    <h1>
    <Link href="/onboarding">
      Clube Atacadão
    </Link>
    </h1>
    </>
  )
}
