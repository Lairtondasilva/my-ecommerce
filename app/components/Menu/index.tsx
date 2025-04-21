// components/Menu.tsx
import Link from "next/link";

type MenuLinkProps = {
  redirectTo: string;
  label: string;
};

type MenuProps = {
  links: MenuLinkProps[];
  isMobile?: boolean;
  onClickLink?: () => void;
};

export default function Menu({
  links,
  isMobile = false,
  onClickLink,
}: Readonly<MenuProps>) {
  return (
    <ul
      className={`${isMobile ? "flex flex-col gap-6 h-screen" : "flex gap-4"}`}
    >
      {links.map((link) => (
        <MenuLink key={link.redirectTo} {...link} onClickLink={onClickLink} />
      ))}
    </ul>
  );
}

function MenuLink({
  redirectTo,
  label,
  onClickLink,
}: MenuLinkProps & { onClickLink?: () => void }) {
  return (
    <li className="text-sm font-medium text-gray-900 hover:text-gray-700">
      <Link
        href={redirectTo}
        className="group block px-4 py-2 relative text-center md:text-start"
        onClick={onClickLink}
      >
        {label}
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1E1E1E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      </Link>
    </li>
  );
}
