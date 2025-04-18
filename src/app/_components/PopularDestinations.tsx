"use client";
import { buttonVariants } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatter";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/1.png",
    alt: "Image 1",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/2.png",
    alt: "Image 2",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/3.png",
    alt: "Image 3",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/4.png",
    alt: "Image 4",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/5.png",
    alt: "Image 5",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/6.png",
    alt: "Image 6",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/7.png",
    alt: "Image 7",
  },
];

const destinations = [
  {
    id: crypto.randomUUID(),
    image: images[0],
    name: "Dubai",
    ticketPrice: 200,
  },
  {
    id: crypto.randomUUID(),
    image: images[1],
    name: "Istanbul",
    ticketPrice: 150,
  },
  {
    id: crypto.randomUUID(),
    image: images[2],
    name: "London",
    ticketPrice: 300,
  },
  {
    id: crypto.randomUUID(),
    image: images[3],
    name: "Paris",
    ticketPrice: 250,
  },
  {
    id: crypto.randomUUID(),
    image: images[4],
    name: "New York",
    ticketPrice: 400,
  },
  {
    id: crypto.randomUUID(),
    image: images[5],
    name: "Tokyo",
    ticketPrice: 350,
  },
  { id: crypto.randomUUID(), image: images[6], name: "Rome", ticketPrice: 280 },
];

function PopularDestinations() {
  return (
    <section className="section-gap">
      <div className="container">
        <div>
          <h3 className="text-accent font-semibold text-2xl xl:text-3xl">
            Popular destinations from Erbil
          </h3>
          <p className="text-muted xl:text-lg">
            These alluring destinations from Erbil are picked just for you.
          </p>
        </div>
        <div className="mt-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-x-3">
            {destinations.slice(0, 3).map((destination) => (
              <li key={destination.id}>
                <DestinationCard destination={destination} />
              </li>
            ))}
            <li className="xl:col-span-2">
              <DestinationCard destination={destinations[3]} />
            </li>
          </ul>

          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-x-3">
            <li className="xl:col-span-2">
              <DestinationCard destination={destinations[4]} />
            </li>
            <li className="xl:col-span-1">
              <DestinationCard destination={destinations[5]} />
            </li>
            <li className="sm:col-span-2 flex md:h-[250px] flex-col md:flex-row border rounded-md border-[#707070]">
              <Image
                src={destinations[6].image.src}
                alt={destinations[6].image.alt}
                width={200}
                height={200}
                className="w-full sm:w-[300px] xl:w-[200px] h-[250px] object-cover rounded-tl-md rounded-bl-md"
              />
              <div className="flex-1 p-6 flex flex-col gap-4 xl:justify-between">
                <div>
                  <h4 className="text-accent text-xl xl:text-2xl font-semibold">
                    Want to fly for even less?
                  </h4>
                  <p className="text-muted font-medium text-sm">
                    Search our best deals, price drops, and travel hacks.
                  </p>
                </div>
                <Link
                  href="/"
                  className={`${buttonVariants({
                    size: "lg",
                  })} !bg-[#E8EDF1] !text-accent !w-fit hover:!bg-[#D1D9E3] hover:text-primary transition-all duration-300`}
                >
                  Explore deals
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;

function DestinationCard({
  destination,
}: {
  destination: {
    id: string;
    image: { src: string; alt: string };
    name: string;
    ticketPrice: number;
  };
}) {
  return (
    <Link
      href="/"
      className="block relative h-[250px] mb-4 rounded-md group overflow-hidden"
    >
      <Image
        src={destination.image.src}
        alt={destination.image.alt}
        width={250}
        height={250}
        className="w-full h-[250px] object-cover rounded-md transition-transform duration-500 group-hover:scale-[1.1]"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-md"></div>
      <div className="absolute bottom-6 px-4 left-0 flex justify-between items-center w-full">
        <div className="flex flex-col text-white flex-1">
          <h3 className="text-white font-semibold text-lg">
            {destination.name}
          </h3>
          <p className="text-sm font-medium">
            TICKETS FROM {formatCurrency(destination.ticketPrice)}
          </p>
        </div>
        <ChevronRight className="text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
      </div>
    </Link>
  );
}
