import { z } from "zod";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../hooks/useToast";

const FormLogin = () => {
  const { emmitErrorToast, Toast } = useToast();

  const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  type loginFormInputs = z.infer<typeof loginFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<loginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  async function handleLogin(data: loginFormInputs) {
    try {
      console.log(data);
    } catch (error) {
      reset();
      emmitErrorToast("Email ou senha incorretos", 1000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col items-center w-full pl-8 gap-6"
    >
      <input
        className="border h-11 border-gray-300 rounded-md w-[65%] pl-2 outline-none"
        type="email"
        placeholder="Email"
        required
        autoComplete="off"
        {...register("email")}
      />
      <input
        className="border h-11  border-gray-300 rounded-md w-[65%] pl-2 outline-none"
        type="password"
        placeholder="Senha"
        required
        autoComplete="off"
        {...register("password")}
      />

      {/* <a href="" className="w-full text-start">
        Esqueci minha senha
      </a> */}

      {isSubmitting ? (
        <Button
          className="border border-pink-salmon rounded-md w-[65%] h-11 text-pink-salmon hover:bg-pink-salmon hover:text-white transition ease-in-out delay-50"
          type="submit"
          content="Acessar"
          disabled={true}
        />
      ) : (
        <Button
          className="border border-pink-salmon rounded-md w-[65%] h-11 text-pink-salmon hover:bg-pink-salmon hover:text-white transition ease-in-out delay-50"
          type="submit"
          content="Acessar"
        />
      )}
    </form>
  );
};

export default FormLogin;
