import { Button } from "@/components/ui/button";
import { Airplay, ChevronRight, HelpCircle, LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

function BestDeals() {
  const services = [
    {
      id: crypto.randomUUID(),
      title: "My Trips",
      description:
        "Quickly find your booking reservations and redeem flight credits",
      icon: Airplay,
    },
    {
      id: crypto.randomUUID(),
      title: "Help Center",
      description:
        "We are always Here for you - reach us 24hrs a day, 7 days a week",
      icon: HelpCircle,
    },
  ];

  return (
    <section className="section-gap bg-card">
      <div className="container">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 flex flex-wrap gap-4 bg-white p-4 rounded-md shadow-md">
            <div className="flex-1">
              <h3 className="font-semibold text-xl xl:text-2xl">
                Our Best Deals are in the App
              </h3>
              <p className="font-medium text-sm text-muted">
                Discover hotel, flight and rental car deals exclusively in the
                app. Download today to stay connected with important trip
                details.
              </p>
              <div className="flex gap-4 mt-4 border border-gray-300 rounded-md p-2">
                <input
                  type="email"
                  placeholder="E-Mail or Mobile Phone Number"
                  className="flex-1 focus:outline-none px-2 py-1 rounded-md"
                />
                <Button type="button" className="cursor-pointer">
                  Send Link
                </Button>
              </div>
            </div>

            <div className="border border-primary rounded-md p-2">
              <Image
                src="/images/qr-code.png"
                alt="QR code"
                width={150}
                height={200}
                className="rounded-md"
              />
            </div>
          </div>
          <Services services={services} />
        </div>
        <div className="py-10 text-muted font-medium flex flex-col gap-4">
          <p>
            Kurdosline is one of the largest online travel platforms in Iraq,
            and a trusted name in the Iraq travel industry. We offer &quot;end
            to end&quot; travel solutions including air tickets, hotel booking,
            and holiday packages. Additionally, we offer ancillary value-added
            services.
          </p>
          <p>
            We understand that planning a trip can be overwhelming, so we have
            simplified the process to make it easy for you to find the perfect
            travel deals that suit your needs. Our website is user-friendly and
            provides a wide range of options to choose from. Whether you&apos;re
            planning a family vacation, a solo adventure, or a business trip, we
            have you covered with our comprehensive travel packages. From
            flights to hotels, car rentals to holiday packages, we offer
            everything you need to make your trip a success.
          </p>
          <p>
            We believe in transparency and honesty in all our dealings. We do
            not charge any hidden fees, and our prices are always competitive.
            With Kurdosline, you can be assured of getting the best travel deals
            in the market. If you&apos;re looking for a hassle-free and
            affordable way to plan your next trip, look no further than
            Kurdosline. We promise to make your travel experience a memorable
            one.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BestDeals;

function Services({
  services,
}: {
  services: {
    id: string;
    title: string;
    description: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }[];
}) {
  return (
    <ul className="flex flex-col gap-4 justify-between">
      {services.map((option) => (
        <li
          key={option.id}
          className="h-1/2 px-4 bg-white element-center rounded-md group transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          <Link
            href="/"
            className="flex items-center justify-between h-full gap-4 group"
          >
            <div className="flex gap-4">
              <div className="rounded-md flex justify-center items-center w-14 h-14 p-2 bg-[#ebf4fb]">
                <option.icon className="text-primary w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-sm text-muted">{option.description}</p>
              </div>
            </div>
            <ChevronRight className="text-accent transition-transform duration-300 ease-in-out transform group-hover:translate-x-2" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
