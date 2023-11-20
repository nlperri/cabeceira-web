import { z } from "zod";
import { UserDetailsData } from "../@types/UserDetailsData.type";
import closeIcon from "../assets/closeIcon.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Id } from "react-toastify";

interface UpdateUserProps {
  user: UserDetailsData;
  handleUpdateModal: () => void;
  emmitErrorToast: (message: string, duration: number) => Id;
}

const UpdateUserModal = ({
  user,
  handleUpdateModal,
  emmitErrorToast,
}: UpdateUserProps) => {
  const updateUserFormSchema = z.object({
    name: z.string(),
    lastName: z.string(),
    password: z.string().min(8),
  });

  type updateUserInputs = z.infer<typeof updateUserFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateUserInputs>({
    resolver: zodResolver(updateUserFormSchema),
  });

  function handleErrors() {}

  async function handleUpdateUser(data: updateUserInputs) {}

  return (
    user && (
      <div className="absolute h-full w-full bg-white">
        <img
          onClick={handleUpdateModal}
          className=" absolute right-1 top-1 w-10 cursor-pointer"
          src={closeIcon}
          alt=""
        />
        <div className="flex flex-col items-center mt-[150px] font-[Content]">
          <div className="w-[70%] flex flex-col items-center">
            <div className="w-full max-w-[500px]">
              <h1 className="text-blue-950 text-3xl font-bold font-['Content']">
                Editar perfil
              </h1>
            </div>
            <form
              onSubmit={handleSubmit(handleUpdateUser)}
              className="flex flex-col gap-3 w-full max-w-[500px] mt-16"
            >
              <label className="font-semibold text-blue-950" htmlFor="name">
                Nome:
              </label>
              <input
                className="p-2 bg-white rounded-lg border border-neutral-400"
                type="text"
                id="name"
                {...register("name")}
              />
              <label className="font-semibold text-blue-950" htmlFor="lastname">
                Sobrenome:
              </label>
              <input
                className="p-2 bg-white rounded-lg border border-neutral-400"
                type="text"
                id="lastname"
                {...register("lastName")}
              />
              <label className="font-semibold text-blue-950" htmlFor="password">
                Senha:
              </label>
              <input
                className="p-2 bg-white rounded-lg border border-neutral-400"
                type="password"
                id="password"
                {...register("password")}
              />
              <div className="text-blue-950 text-[14px] ml-4 font-normal">
                Sua senha deve ter no mínimo 8 caracteres.
              </div>
            </form>
            <button
              type="submit"
              onClick={() => handleErrors()}
              className="mt-32 mb-4 self-center w-[50%] max-w-[300px] p-2 text-center bg-white rounded-lg border border-rose-400 text-rose-400 text-[14px] font-bold hover:bg-pink-salmon hover:text-white cursor-pointer"
            >
              Atualizar usuário
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UpdateUserModal;
