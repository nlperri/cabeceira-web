import logo from "../../public/assets/logo.svg";

const Logo = () => {
  return (
    <section className="flex items-center w-full justify-center m-0">
      <img src={logo} />
      <h1 className="font-bold font-logo text-blue-950 text-5xl max-sm:hidden">
        Cabeceira
      </h1>
    </section>
  );
};

export default Logo;
