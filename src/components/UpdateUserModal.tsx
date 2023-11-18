import { ChangeEvent, useState } from "react";
import { UserDetailsData } from "../@types/UserDetailsData.type";
import closeIcon from "../assets/closeIcon.svg"

interface UpdateUserProps {
    user: UserDetailsData;
    handleUpdateModal:()=>void;
}

const UpdateUserModal = ({ user, handleUpdateModal }: UpdateUserProps) => {
    const [name, setName] = useState(user.name)
    const [lastName, setLastName] = useState(user.lastName)
    const [password, setPassword] = useState("")

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    return (
        user && (
            <div className="absolute h-full w-full bg-white">
                <img onClick={handleUpdateModal} className=" absolute right-1 top-1 w-10 cursor-pointer" src={closeIcon} alt="" />
                <div className="flex flex-col items-center mt-[150px] font-[Content]">
                    <div className="w-[70%] flex flex-col items-center">
                        <div className="w-full max-w-[500px]">
                            <h1 className="text-blue-950 text-3xl font-bold font-['Content']">Editar perfil</h1>
                        </div>
                        <form className="flex flex-col gap-3 w-full max-w-[500px] mt-16">
                            <label className="font-semibold text-blue-950" htmlFor="name">Nome:</label>
                            <input className="p-2 bg-white rounded-lg border border-neutral-400" type="text" value={name} id="name" onChange={handleNameChange} />
                            <label className="font-semibold text-blue-950" htmlFor="lastname">Sobrenome:</label>
                            <input className="p-2 bg-white rounded-lg border border-neutral-400" type="text" value={lastName} id="lastname" onChange={handleLastNameChange} />
                            <label className="font-semibold text-blue-950" htmlFor="password">Senha:</label>
                            <input className="p-2 bg-white rounded-lg border border-neutral-400" type="password" value={password} id="passworc" onChange={handlePasswordChange} />
                            <div className="text-blue-950 text-[14px] ml-4 font-normal">Sua senha deve ter no mínimo 8 caracteres.</div>
                        </form>
                        <div className="mt-32 mb-4 self-center w-[50%] max-w-[300px] p-2 text-center bg-white rounded-lg border border-rose-400 text-rose-400 text-[14px] font-bold hover:bg-pink-salmon hover:text-white cursor-pointer">Atualizar usuário</div>

                    </div>
                </div>
            </div>
        )
    )
}

export default UpdateUserModal;