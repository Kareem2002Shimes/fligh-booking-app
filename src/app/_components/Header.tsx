import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-card py-4 shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] z-10 relative">
      <div className="container flex gap-6 justify-center md:justify-end">
        <Link href="/" className="flex items-center gap-2 text-sm group">
          <Image
            src="/images/icons/suitcase-alt.svg"
            alt="suitcase icon"
            width={24}
            height={24}
          />
          <div className="flex flex-col">
            <span className="text-muted font-medium group-hover:text-primary duration-200 transition-colors">
              My Trips
            </span>
            <span className="text-accent font-semibold group-hover:text-primary duration-200 transition-colors">
              Manage Booking
            </span>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm group border border-[#DBDDE0] w-[170px] px-2 py-1 rounded-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#E5F2FD] flex items-center justify-center">
            <Image
              src="/images/icons/user.svg"
              alt="user icon"
              width={16}
              height={16}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-muted font-medium group-hover:text-primary duration-200 transition-colors">
              Login Or
            </span>
            <span className="text-accent font-semibold group-hover:text-primary duration-200 transition-colors">
              Create Account
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
