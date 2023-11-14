import { Link } from "react-router-dom";
import FormLogin from "../components/FormLogin";
import Logo from "../components/Logo";
import { useToast } from "../hooks/useToast";

const Login = () => {
  const { emmitErrorToast, Toast } = useToast();

  return (
    <div className="font-sans h-screen flex justify-center items-center min-sm:w-full">
      <div className="w-[50%] flex flex-col items-center ">
        <Logo />
        <FormLogin emmitErrorToast={emmitErrorToast} />
        <span className="sm:pl-6 min-w-full text-center mt-6 w-[250px]">
          Não possui uma conta?
          <Link
            className="ml-2 text-pink-salmon hover:text-dark-blue"
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
