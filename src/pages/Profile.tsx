import { useCookies } from "react-cookie";
import { useUserDetails } from "../hooks/useUserDetails";
import { useEffect, useState } from "react";
import { UserDetailsData } from "../@types/UserDetailsData.type";
import Header from "../components/Header";
import person from "../assets/person.svg";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from "../components/UpdateUserModal";
import { useToast } from "../hooks/useToast";

const Profile = () => {
  const [cookies, , removeCookie] = useCookies();
  const token = cookies["token"];
  const { getUser } = useUserDetails();
  const [user, setUser] = useState<UserDetailsData>();
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const navigate = useNavigate();
  const { emmitErrorToast, Toast } = useToast();

  const logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  const handleUpdateModal = () => {
    setOpenUpdateModal((previous) => !previous);
  };

  useEffect(() => {
    const defineUser = async () => {
      const user = await getUser(token);
      setUser(user);
    };
    defineUser();
  }, [setUser]);

  return (
    user && (
      <div className="relative flex flex-col h-screen bg-gray-100">
        <Header />
        <main className="flex-1 flex flex-col items-center mt-[150px] font-[Content] ">
          <div className="w-[70%] flex flex-col ">
            <div className="flex  justify-between items-center">
              <h1 className="text-2xl font-bold text-blue-950">Perfil</h1>
              <p
                onClick={handleUpdateModal}
                className="text-rose-400 hover:text-rose-300 cursor-pointer text-xs font-bold"
              >
                Editar perfil
              </p>
            </div>
            <div className="flex items-center gap-8 mt-16 ml-[10%]">
              <div>
                <img className="w-[94.48px] h-[94.48px]" src={person} />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-black text-2xl font-bold">
                  {user.name} {user.lastName}
                </p>
                <p className="text-black text-lg font-normal">{user.email}</p>
              </div>
            </div>
            <div
              onClick={logout}
              className="mt-32 mb-4 self-center w-[50%] max-w-[300px] p-2 text-center bg-white rounded-lg border border-rose-400 text-rose-400 text-[13px] font-bold hover:bg-pink-salmon hover:text-white cursor-pointer"
            >
              Sair
            </div>
          </div>
          <Toast />
        </main>
        {openUpdateModal && (
          <UpdateUserModal
            emmitErrorToast={emmitErrorToast}
            user={user}
            setUser={setUser}
            handleUpdateModal={handleUpdateModal}
            token={token}
          />
        )}
      </div>
    )
  );
};

export default Profile;
