"use client";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";

const images = [
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/1.avif",
    alt: "Image 1",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/2.avif",
    alt: "Image 2",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/3.avif",
    alt: "Image 3",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/4.avif",
    alt: "Image 4",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/5.avif",
    alt: "Image 5",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/6.avif",
    alt: "Image 6",
  },
  {
    id: crypto.randomUUID(),
    src: "/images/popular-destinations/7.avif",
    alt: "Image 7",
  },
];

function PopularDestinations() {
  const options = [
    {
      id: crypto.randomUUID(),
      title: "Countless options",
      description:
        "Kurdosline compares flight from 450+ airline to bring you the best deals",
      icon: Clock,
    },
    {
      id: crypto.randomUUID(),
      title: "Quick and easy",
      description:
        "Book the best flight quickly and easily with just a few clicks.",
      icon: Clock,
    },
    {
      id: crypto.randomUUID(),
      title: "Purchase securely",
      description:
        "Your payments are secured by GigiCert, a leader in digital certificate.",
      icon: Clock,
    },
  ];

  return (
    <section className="pt-10">
      <div className="container">
        <ul className="flex gap-4">
          {options.map((option) => (
            <li
              key={option.id}
              className="flex gap-4 mb-4 bg-card p-4 rounded-md hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <option.icon className="text-primary w-10 h-10" />
              <div>
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-sm text-muted">{option.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="text-accent font-semibold text-xl xl:text-2xl mb-4">
            Popular destinations from Erbil
          </h3>
          <p className="text-accent">
            These alluring destinations from Erbil are picked just for you.
          </p>
        </div>
        <div className="">
          <ul className="grid grid-cols-5 gap-4 mt-4">
            {images.slice(0, 3).map((image) => (
              <li key={image.id}>
                <Carousel />
              </li>
            ))}
            <li className="col-span-2">
              <Carousel />
            </li>
          </ul>

          <ul className="grid grid-cols-5 gap-4 ">
            <li className="col-span-2">
              <Carousel />
            </li>
            <li className="col-span-1">
              <Carousel />
            </li>
            <li className="col-span-2">
              <Carousel />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;

const Carousel = () => {
  const shuffleArray = (
    array: {
      id: string;
      src: string;
      alt: string;
    }[]
  ) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };
  const [shuffledImages, setShuffledImages] = useState(images);

  // Shuffle images on the client-side after the initial render
  useEffect(() => {
    setShuffledImages(shuffleArray([...images]));
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {shuffledImages.map((image) => (
        <SwiperSlide key={image.id}>
          <div className="relative h-[250px] mb-4 !rounded-md ">
            <Image
              src={image.src}
              alt={image.alt}
              width={250}
              height={250}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-md"></div>
            <div className="absolute bottom-6 px-4 left-0 flex justify-between items-center w-full">
              <div className="flex flex-col text-white flex-1">
                <h3 className="text-white font-semibold text-lg">Dubai</h3>
                <p className="text-sm font-medium">TICKETS FROM $640</p>
              </div>
              <ChevronRight className="text-white" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
