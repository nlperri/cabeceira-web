import logo from "../../public/assets/logo.svg";

const Logo = () => {
  return (
    <section className="flex items-center w-full justify-center">
      <img src={logo} />
      <h1 className="font-bold font-logo text-blue-950 text-5xl">Cabeceira</h1>
    </section>
  );
};

export default Logo;
