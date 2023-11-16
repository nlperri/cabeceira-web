import { Link } from "react-router-dom";
import logo from "../../src/assets/headerLogo.svg";
import profile from "../../src/assets/profile.svg";
const Header = () => {
  return (
    <header className="w-full p-2 flex bg-blue-950 items-center justify-between">
      <img className="w-[54px] h-[55px]" src={logo} />
      <div className="w-64 h-[29px] flex items-center gap-16">
        <Link to="/" className="text-white text-base font-bold font-16">
          Minha cabeceira
        </Link>
        <Link
          to="/explore"
          className="text-white text-base font-normal font-sans"
        >
          Explorar
        </Link>
      </div>
      <Link to="/profile">
        <img className="w-[34px] h-9 " src={profile} />
      </Link>
    </header>
  );
};

export default Header;
