import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Id } from "react-toastify";
import { useLogin } from "../hooks/useLogin";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

interface FormLoginProps {
  emmitErrorToast: (message: string, duration: number) => Id;
}

const FormLogin = ({ emmitErrorToast }: FormLoginProps) => {
  const { login } = useLogin();
  const [, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  type loginFormInputs = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  function handleErrors() {
    Object.keys(errors).length > 0 &&
      emmitErrorToast("Email ou senha inválido", 1000);
  }

  async function handleLogin(data: loginFormInputs) {
    try {
      const response = await login(data);
      setCookie("token", "Bearer " + response.token);
      navigate("/");
    } catch (error) {
      emmitErrorToast("Email ou senha inválido", 1000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center w-full sm:pl-8 gap-6"
    >
      <input
        className="border h-11 border-gray-300 rounded-md w-full min-w-[300px] max-w-[430px] pl-2 outline-none"
        type="email"
        placeholder="Email"
        required
        autoComplete="off"
        {...register("email")}
      />
      <input
        className="border h-11 w-full min-w-[300px] max-w-[430px] border-gray-300 rounded-md pl-2 outline-none"
        type="password"
        placeholder="Senha"
        required
        autoComplete="off"
        {...register("password")}
      />

      {isSubmitting ? (
        <button
          onClick={() => handleErrors()}
          className="border w-full min-w-[300px] max-w-[430px] border-pink-salmon rounded-md  h-11 text-pink-salmon hover:bg-pink-salmon hover:text-white transition ease-in-out delay-50"
          type="submit"
        >
          <div className="flex items-center justify-center w-full">
            <Loading width="28px" height="28px" />
          </div>
        </button>
      ) : (
        <button
          onClick={() => handleErrors()}
          className="border w-full min-w-[300px] max-w-[430px] border-pink-salmon rounded-md  h-11 text-pink-salmon hover:bg-pink-salmon hover:text-white transition ease-in-out delay-50"
          type="submit"
        >
          Acessar
        </button>
      )}
    </form>
  );
};

export default FormLogin;
