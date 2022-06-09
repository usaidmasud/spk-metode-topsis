import Link from "next/link";

interface IMenu {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}
const Menu: React.FC<IMenu> = (props) => {
  return (
    <li className="self-center md:self-start">
      <Link href={props.href}>
        <a
          className={`
        flex gap-4 items-center text-base text-gray-800 hover:font-semibold 
        ${
          props.isActive
            ? "font-semibold text-primary-200 underline underline-offset-4"
            : ""
        }
        `}
        >
          {props.icon}
          <span className="hidden md:block">{props.label}</span>
        </a>
      </Link>
    </li>
  );
};

export default Menu;
