import { UserDetailsData } from "../@types/UserDetailsData.type";
import { api } from "../lib/api";

export class UserDetailsService {
  loginUrl: string = "/users";

  async execute(token: string) {
    const response = await api.get<UserDetailsData>(this.loginUrl, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }
}
