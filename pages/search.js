import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Pill from "../Components/Pill";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../Components/InfoCard";
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
      <main className="mx-4 sm:mx-10 md:mx-20">
        <section className="pt-10 w-full">
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
          <div className="last:pb-5">
            {searchResults?.map((result) => (
              <InfoCard data={result} />
            ))}
          </div>
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
