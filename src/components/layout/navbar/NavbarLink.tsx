import { T_NavbarLink } from "@/types/mockData";

interface Props {
  link: T_NavbarLink;
}

export default function NavbarLink({ link }: Props) {
  return (
    <li className="flex first:flex-1">
      <a
        className="text-primary overflow-hidden text-sm font-medium after:block after:h-0.5 after:w-full after:-translate-x-[101%] after:bg-primary after:transition hover:after:translate-x-0 lg:text-base"
        href={link.href}
      >
        {link.name}
      </a>
    </li>
  );
}
