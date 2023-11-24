import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Id } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { AxiosError } from "axios";
import Loading from "./Loading";

interface FormRegisterProps {
  emmitErrorToast: (message: string, duration: number) => Id;
}

const FormRegister = ({ emmitErrorToast }: FormRegisterProps) => {
  const { registerUser } = useRegister();
  const navigate = useNavigate();

  const registerFormSchema = z.object({
    name: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  });

  type registerFormInputs = z.infer<typeof registerFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerFormInputs>({
    resolver: zodResolver(registerFormSchema),
  });

  function handleErrors() {
    errors.name && emmitErrorToast("Nome inválido", 1000);

    errors.lastName && emmitErrorToast("Sobrenome inválido", 1000);

    errors.email && emmitErrorToast("Email inválido", 1000);

    errors.password && emmitErrorToast("Senha inválida", 1000);

    errors.confirmPassword &&
      emmitErrorToast("Confirmação de senha inválida", 1000);
  }

  async function handleRegister(data: registerFormInputs) {
    try {
      if (data.password !== data.confirmPassword) {
        emmitErrorToast("Senhas não conferem", 1000);
        return;
      }
      await registerUser({
        email: data.email,
        name: data.name,
        lastName: data.lastName,
        password: data.password,
      });
      navigate("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        emmitErrorToast(error.response?.data, 1000);
      } else {
        emmitErrorToast("Email ou senha incorretos", 1000);
      }
    }
  }

  return (
    <>
      <h2 className="font-bold text-2xl max-sm:m-5 max-sm:text-center max-sm:p-0 p-4 max-w-[430px] w-full text-dark-blue">
        Crie sua conta
      </h2>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col items-center w-full sm:pl-8 gap-6"
      >
        <input
          className="border h-11 border-gray-300 rounded-md w-full min-w-[300px] max-w-[430px] pl-2 outline-none"
          type="text"
          placeholder="Nome"
          required
          autoComplete="off"
          {...register("name")}
        />
        <input
          className="border h-11 border-gray-300 rounded-md w-full min-w-[300px] max-w-[430px] pl-2 outline-none"
          type="text"
          placeholder="Sobrenome"
          required
          autoComplete="off"
          {...register("lastName")}
        />
        <input
          className="border h-11 border-gray-300 rounded-md w-full min-w-[300px] max-w-[430px] pl-2 outline-none"
          type="email"
          placeholder="Email"
          required
          autoComplete="off"
          {...register("email")}
        />
        <div className="flex flex-col w-full min-w-[300px] max-w-[430px] gap-2">
          <input
            className="border h-11 w-full border-gray-300 rounded-md pl-2 outline-none"
            type="password"
            placeholder="Senha"
            required
            autoComplete="off"
            {...register("password")}
          />
          <span className="text-sm text-pink-salmon max-w-[430px] w-full">
            Sua senha deve ter no mínimo 8 caracteres.
          </span>
        </div>

        <input
          className="border h-11 w-full min-w-[300px] max-w-[430px] border-gray-300 rounded-md pl-2 outline-none"
          type="password"
          placeholder="Confirmar senha"
          required
          autoComplete="off"
          {...register("confirmPassword")}
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
            Criar
          </button>
        )}
      </form>
    </>
  );
};

export default FormRegister;
