import BestDeals from "./_components/BestDeals";
import Hero from "./_components/Hero";
import PopularDestinations from "./_components/PopularDestinations";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularDestinations />
      <BestDeals />
    </main>
  );
}
