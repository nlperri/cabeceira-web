import { LoginData } from "../@types/loginData.type";
import { api } from "../lib/api";

export class LoginService {
  loginUrl: string = "/auth/login";

  async execute(data: LoginData) {
    const response = await api.post<{ token: string }>(this.loginUrl, {
      ...data,
    });

    return response.data;
  }
}
