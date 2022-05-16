import Head from "next/head";
import Link from "next/link";

export default function Onboarding() {
    return(
        <>
        <Head>
        <title>Primeiros Passos</title>
        </Head>
        <h1>Primeiros Passos</h1>
        <h2>
        <Link href="/marketplace">
                Acessar Marketplace
        </Link>
        </h2>
        </>
    )
}