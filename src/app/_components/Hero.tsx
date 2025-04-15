import Image from "next/image";
import Searchbar from "./searchbar";

function Hero() {
  return (
    <section className="bg-card">
      <div className="container pb-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="py-10 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-accent mb-3 font-semibold">
              Find <strong>cheap flights</strong> and save
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-muted">
              Search and compare our best deals with over 400+ airlines
            </p>
          </div>
          <div className="w-full lg:w-auto mt-6 lg:mt-0">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              width={400}
              height={200}
              className="w-full h-[250px] object-cover"
            />
          </div>
        </div>
        <Searchbar />
      </div>
    </section>
  );
}

export default Hero;
