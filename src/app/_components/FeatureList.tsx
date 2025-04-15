import Image from "next/image";

const features = [
  {
    id: crypto.randomUUID(),
    title: "Countless features",
    description:
      "Kurdosline compares flight from 450+ airline to bring you the best deals",
    icon: {
      src: "/images/icons/grid.svg",
      alt: "Timer Icon",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Quick and easy",
    description:
      "Book the best flight quickly and easily with just a few clicks.",
    icon: {
      src: "/images/icons/timer-icon.svg",
      alt: "Timer Icon",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Purchase securely",
    description:
      "Your payments are secured by GigiCert, a leader in digital certificate.",
    icon: {
      src: "/images/icons/safe-icon.svg",
      alt: "Timer Icon",
    },
  },
];

function FeatureList() {
  return (
    <section className="section-gap">
      <div className="container">
        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex flex-col lg:flex-row gap-4 bg-card p-4 rounded-md hover:shadow-md transition-shadow duration-200 ease-in-out"
            >
              <div className="element-center">
                <Image
                  src={feature.icon.src}
                  alt={feature.icon.alt}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <h3 className="text-lg text-accent font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeatureList;
