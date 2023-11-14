import { toast } from "react-toastify";
import Toast from "../components/Toast";

export const useToast = () => {
  const emmitErrorToast = (
    message: string = "oooops...",
    duration: number = 500
  ) => {
    return toast(message, {
      type: "error",
      position: "top-right",
      autoClose: duration,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const emmitSuccessToast = (
    message: string = "oooops...",
    duration: number = 500
  ) => {
    return toast(message, {
      type: "success",
      position: "top-right",
      autoClose: duration,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    emmitErrorToast,
    Toast,
    emmitSuccessToast,
  };
};
