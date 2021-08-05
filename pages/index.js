import Head from "next/head";
import Header from "../Components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
    </div>
  );
}
