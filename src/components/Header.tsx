import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/headerLogo.svg";
import profile from "../../src/assets/profile.svg";
import menu from "../../src/assets/menu.svg";
import closeIconMenu from "../../src/assets/closeIconMenu.svg";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen((previous) => !previous);
  };
  const { pathname } = useLocation();

  return (
    <header className="w-full h-min-[300px] p-2  bg-blue-950 ">
      <div className="flex items-center  justify-between">
        <img
          className="w-[45px] h-[45px] min-[730px]:hidden cursor-pointer"
          src={menuOpen ? closeIconMenu : menu}
          onClick={handleMenuOpen}
        />
        <Link to="/">
          <img className="w-[54px] h-[55px]" src={logo} />
        </Link>
        <div className="w-64 h-[29px] max-[730px]:hidden flex items-center gap-16">
          <Link
            to="/"
            className={`text-white text-base ${
              pathname === "/" && "font-bold"
            }  font-16`}
          >
            Minha cabeceira
          </Link>
          <Link
            to="/explore"
            className={`text-white text-base font-sans  ${
              pathname === "/explore" && "font-bold"
            }`}
          >
            Explorar
          </Link>
        </div>
        <Link to="/profile">
          <img className="w-[34px] h-9 " src={profile} />
        </Link>
      </div>
      {menuOpen && <MobileHeader />}
    </header>
  );
};

export default Header;
