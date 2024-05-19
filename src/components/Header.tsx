import { SiExpertsexchange } from "react-icons/si";

interface HeaderProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setActive }) => {
  return (
    <header className="py-5">
      <nav>
        <ul className="flex justify-center gap-10 text-white items-center">
          <li className="hover:text-customBlue transition-all text-2xl duration-200">
            <a href="">
              <SiExpertsexchange />
            </a>
          </li>
          <li className="item_navbar">
            <a className="cursor-pointer" onClick={() => setActive(false)}>
              RULES
            </a>
          </li>
          <li className="item_navbar">
            <a href="#FAQ">FAQ</a>
          </li>
          <li className="item_navbar">
            <a href="https://t.me/qdyyys">SUPPORT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
