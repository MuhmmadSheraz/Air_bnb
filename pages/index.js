import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import LargeCard from "../Components/LargeCard";
import MediumCard from "../Components/MediumCard";
import SmallCards from "../Components/SmallCard";
import Footer from "../Components/Footer";
export default function Home({ exploreData, liveAnyWhereData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/Images/favicon.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto pt-5 px-8 sm:px-16">
        {/* Expolre Nearby */}
        <section className="pt-6">
          <h1 className="text-4xl pb-8 font-semibold">Explore Nearby</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {exploreData?.map((item) => (
              <SmallCards item={item} />
            ))}
          </div>
          {/* Live Anywhere */}
        </section>
        <section className="pt-12">
          <h1 className="text-4xl pb-8 font-semibold">Live Anywhere</h1>
          <div className="flex overflow-scroll scrollbar-hide">
            {liveAnyWhereData?.map((data) => (
              <MediumCard data={data} />
            ))}
          </div>
        </section>
        {/* Latge Card */}
        <section className="pt-12">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists created by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (response) => {
      return response.json();
    }
  );
  const liveAnyWhereData = await fetch("https://links.papareact.com/zp1").then(
    (response) => response.json()
  );
  return {
    props: {
      exploreData,
      liveAnyWhereData,
    },
  };
}
