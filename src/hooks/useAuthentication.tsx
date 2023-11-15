import { useCookies } from "react-cookie";
import { useUserDetails } from "./useUserDetails";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [cookies] = useCookies();
  const { getUser } = useUserDetails();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const token = cookies["token"];

  useEffect(() => {
    const checkAuthentication = async () => {
      if (token) {
        try {
          const user = await getUser(token);
          if (user) {
            setIsAuthenticated(true);
          }
          setIsLoading(false);
        } catch (error) {
          console.error("Error de autenticação: ", error);
        }
      }
    };

    checkAuthentication();
  }, [token, getUser, setIsLoading]);

  return { isAuthenticated, isLoading };
};
