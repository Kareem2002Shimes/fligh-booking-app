import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  const aboutLink = [
    {
      href: "/",
      title: "About Us",
    },
    {
      href: "/",
      title: "Careers",
    },
    {
      href: "/",
      title: "New",
    },
  ];
  const helpLinks = [
    {
      href: "/",
      title: "Help Center",
    },
  ];

  const followLinks = [
    {
      href: "/",
      title: "Facebook",
      icon: FacebookIcon,
    },
    {
      href: "/",
      title: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: "/",
      title: "Twitter",
      icon: TwitterIcon,
    },
    {
      href: "/",
      title: "LinkedIn",
      icon: LinkedinIcon,
    },
  ];

  const otherServicesLinks = [
    {
      href: "/services/flight-booking",
      title: "Flight Booking",
    },
    {
      href: "/services/hotel-booking",
      title: "Hotel Booking",
    },
    {
      href: "/services/airport-transfers",
      title: "Airport Transfers",
    },
  ];

  return (
    <footer className="bg-secondary py-14 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* About Company Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">About Company</h3>
            <ul className="flex flex-col gap-2">
              {aboutLink.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition duration-200 ease-in-out text-sm text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Services Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Other Services</h3>
            <ul className="flex flex-col gap-1">
              {otherServicesLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition duration-200 ease-in-out text-sm text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Our Help Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Need Our Help?</h3>
            <ul className="flex flex-col gap-2">
              {helpLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="border border-white px-8 py-2 rounded-md hover:bg-white hover:text-secondary transition duration-200 ease-in-out text-sm text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <ul className="flex gap-4">
              {followLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    aria-label={`Follow us on ${link.title}`}
                    className="transition duration-200 ease-in-out text-sm text-secondary hover:bg-primary hover:text-white bg-white w-10 h-10 p-2 rounded-full flex justify-center items-center"
                  >
                    <link.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left text-sm text-white opacity-70">
            All users of our online services are subject to our Privacy
            Statement and agree to be bound by our Terms of Service. Copyright
            2025 Kurdosline, All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <strong className="text-white">Accepted Payment Methods</strong>
            {/* Add payment method icons here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
