import { NAVBAR_LINKS } from "@/lib/mockData";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="max-w-2k fixed right-0 left-0 z-50 mx-auto w-full bg-green-900/80 px-6 py-5 backdrop-blur-xs">
      <ul className="flex items-center gap-4">
        {NAVBAR_LINKS.map((link) => (
          <NavbarLink key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  );
}
