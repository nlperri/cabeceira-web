import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import Logo from "../components/Logo";
import { useToast } from "../hooks/useToast";

const Login = () => {
  const { emmitErrorToast, Toast } = useToast();

  return (
    <div className="relative font-sans h-screen flex justify-center items-center">
      <div className="w-[50%] flex flex-col items-center">
        <Logo />
        <FormLogin emmitErrorToast={emmitErrorToast} />
        <span className="relative left-5 top-5">
          Não possui uma conta?
          <Link
            className="ml-1 text-pink-salmon hover:text-dark-blue"
            to="/register"
          >
            Criar
          </Link>
        </span>
      </div>
      <Toast />
    </div>
  );
};

export default Login;
