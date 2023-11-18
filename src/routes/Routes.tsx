import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

import {
  AuthenticatedRoute,
  NotAuthenticatedRoute,
} from "./AuthenticationRoutes";
import { BookContextProvider } from "../contexts/BookContext";
import { ModalContextProvider } from "../contexts/ModalContext";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoute element={<Home />} />,
  },
  {
    path: "/profile",
    element: <AuthenticatedRoute element={<Profile />} />,
  },
  {
    path: "/login",
    element: <NotAuthenticatedRoute element={<Login />} />,
  },
  {
    path: "/register",
    element: <NotAuthenticatedRoute element={<Register />} />,
  },
]);

const Routes = () => {
  return (
    <ModalContextProvider>
      <BookContextProvider>
        <RouterProvider router={router} />
      </BookContextProvider>
    </ModalContextProvider>
  );
};
export default Routes;
