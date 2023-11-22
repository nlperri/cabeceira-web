import { Link, useLocation } from "react-router-dom";

const MobileHeader = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full min-[730px]:hidden p-2 flex flex-col items-center gap-12 my-8 bg-blue-950 ">
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
    </nav>
  );
};

export default MobileHeader;
