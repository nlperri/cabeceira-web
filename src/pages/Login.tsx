import FormLogin from "../components/FormLogin";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div className="font-sans h-screen flex justify-center items-center">
      <div className="w-[50%] flex flex-col items-center">
        <Logo />
        <FormLogin />
      </div>
    </div>
    // Form
    // Campo do Email
    // Campo do Password
    // Esqueci a Senha
    // Botao Acessar
    // Nao possui uma conta? Criar
  );
};

export default Login;
