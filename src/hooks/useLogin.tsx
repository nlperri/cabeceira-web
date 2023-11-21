import { LoginData } from "../@types/loginData.type";
import { LoginService } from "../service/login.service";

export function useLogin() {
  async function login(data: LoginData) {
    return new LoginService().execute(data);
  }
  return {
    login,
  };
}
