import { Luggage, UserRound } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-card py-4">
      <div className="container flex gap-6 justify-end">
        <Link href="/" className="flex items-center gap-2 text-sm group">
          <Luggage className="text-[#aeb0b1]  group-hover:text-primary duration-200 transition-colors" />
          <div className="flex flex-col">
            <span className="text-muted group-hover:text-primary duration-200 transition-colors">
              My Trips
            </span>
            <span className="text-accent font-semibold  group-hover:text-primary duration-200 transition-colors">
              Manage Booking
            </span>
          </div>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm group border border-gray-200 px-2 py-1 rounded-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#ebf4fb] flex items-center justify-center">
            <UserRound className="text-primary w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-muted group-hover:text-primary duration-200 transition-colors">
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
