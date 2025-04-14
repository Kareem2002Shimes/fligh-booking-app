import Image from "next/image";
import Searchbar from "./Searchbar";

function Hero() {
  return (
    <section className="bg-card">
      <div className="container pb-10">
        <div className=" flex justify-between">
          <div className="py-10">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-accent mb-1">
              Find <strong>cheap flights</strong> and save
            </h1>
            <p className="text-accent text-base xl:text-xl">
              Search and compare our best deals with over 400+ airlines
            </p>
          </div>
          <div>
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
