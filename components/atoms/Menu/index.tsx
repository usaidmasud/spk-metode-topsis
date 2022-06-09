import Link from "next/link";

interface IMenu {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}
const Menu: React.FC<IMenu> = (props) => {
  return (
    <li>
      <Link href={props.href}>
        <a
          className={`
        flex gap-4 items-center text-lg text-gray-700 hover:font-semibold 
        ${props.isActive ? "font-semibold text-primary-200 underline underline-offset-4" : ""}
        `}
        >
          {props.icon}
          {props.label}
        </a>
      </Link>
    </li>
  );
};

export default Menu;