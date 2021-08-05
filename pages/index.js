import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/Images/favicon.png" />
      </Head>
      <Header/>
      <Banner/>
    </div>
  );
}
