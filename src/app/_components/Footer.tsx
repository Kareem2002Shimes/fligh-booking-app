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

  return (
    <footer className="bg-secondary py-14 text-white">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">About Company</h3>
            <ul className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Other Services</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Need Our Help?</h3>
            <ul className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <ul className="flex gap-4">
              {followLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="transition duration-200 ease-in-out text-sm text-secondary hover:bg-primary hover:text-white bg-white w-7 h-7 p-1 rounded-full flex justify-center items-center"
                  >
                    <link.icon />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          <p className="col-span-3">
            All users of our online services are subject to our Privacy
            Statement and agree to be bound by our Terms of Service. Copyright
            2025 Kurdosline, All rights reserved.
          </p>
          <strong>Accepted Payment Methods</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
