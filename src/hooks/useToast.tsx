import { toast } from "react-toastify";
import Toast from "../components/Toast";

export function useToast() {
  const emmitErrorToast = (
    message: string = "oooops...",
    duration: number = 500
  ) => {
    toast.error(message, {
      type: "error",
      data: {
        message,
        duration,
      },
      draggable: true,
    });
  };

  const emmitSuccessToast = (
    message: string = "success...",
    duration: number = 500
  ) => {
    toast.success(message, {
      type: "success",
      data: {
        message,
        duration,
      },
      draggable: true,
    });
  };

  return {
    emmitErrorToast,
    Toast,
    emmitSuccessToast,
  };
}
