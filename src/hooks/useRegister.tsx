import { RegisterData } from "../@types/registerData.type";
import { RegisterService } from "../service/register.service";

export function useRegister() {
  async function registerUser(data: RegisterData) {
    return new RegisterService().execute(data);
  }
  return {
    registerUser,
  };
}
