import Image from "next/image";

function MobileBanner() {
  return (
    <section className="section-gap">
      <div className="container">
        <div className="relative w-full h-[400px] rounded-md overflow-hidden">
          <Image
            src="/images/mobile-banner.png"
            alt="Promotional banner showing mobile app features"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default MobileBanner;
