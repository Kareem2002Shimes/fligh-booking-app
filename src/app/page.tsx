import BestDeals from "./_components/BestDeals";
import FeatureList from "./_components/FeatureList";
import Hero from "./_components/Hero";
import MobileBanner from "./_components/MobileBanner";
import PopularDestinations from "./_components/PopularDestinations";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureList />
      <PopularDestinations />
      <MobileBanner />
      <BestDeals />
    </main>
  );
}
