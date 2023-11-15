import FormRegister from "../components/FormRegister";
import Logo from "../components/Logo";
import { useToast } from "../hooks/useToast";

const Register = () => {
  const { emmitErrorToast, Toast } = useToast();

  return (
    <div className="font-sans h-screen flex justify-center items-center min-sm:w-full">
      <div className="w-[50%] flex flex-col items-center ">
        <Logo />
        <FormRegister emmitErrorToast={emmitErrorToast} />
      </div>
      <Toast />
    </div>
  );
};

export default Register;
