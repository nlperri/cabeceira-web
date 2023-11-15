import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

interface AuthenticatedRouteProps {
  element: ReactNode;
}

export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  element,
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthentication();

  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  return element;
};
