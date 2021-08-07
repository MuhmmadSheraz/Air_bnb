import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Pill from "../Components/Pill";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../Components/InfoCard";
import Map from "../Components/Map";
const Search = ({ searchResults }) => {
  const {
    query: { peoples, startDate, endDate, location },
  } = useRouter();
  useEffect(() => {
    console.log(searchResults);
  }, []);
  const formatStartDate = format(new Date(startDate), "dd MMMM yyy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yyy");
  const range = `${formatStartDate} - ${formatEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${peoples}`} />
      <main className="mx-4  flex ">
        <section className="pt-10 w-full flex-grow">
          <p className="text-sm">
            300+ Stays -{range} for {peoples} guests
          </p>
          <h1 className="text-2xl py-3 font-semibold ">Stays in {location}</h1>
          <div className=" inline-flex  justify-start items-center space-x-3 py-6 overflow-scroll  scrollbar-hide w-full">
            <Pill title="Cancellation Flexiblity" />
            <Pill title="Places" />
            <Pill title="Rooms and Beds" />
            <Pill title="More Filters" />
          </div>
          <div className="flex flex-col  flex-grow last:pb-5 ">
            {searchResults?.map((result) => (
              <InfoCard data={result} />
            ))}
          </div>
        </section>
        <section className="h-[auto] w-1/2 sticky top-0 mt-10 pb-5 right-0 hidden lg:inline-block">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (response) => response.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
