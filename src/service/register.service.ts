import { UserDetailsData } from "../@types/UserDetailsData.type";
import { RegisterData } from "../@types/registerData.type";
import { api } from "../lib/api";

export class RegisterService {
  loginUrl: string = "/users";

  async execute(data: RegisterData) {
    const response = await api.post<UserDetailsData>(this.loginUrl, {
      ...data,
    });

    return response.data;
  }
}
