import { UserDetailsData } from "../@types/UserDetailsData.type";
import { UpdateUserData } from "../@types/updateUser.type";
import { api } from "../lib/api";

export class UpdateUserService {
  userUrl: string = "/users";

  async execute(token: string, data: UpdateUserData) {
    const response = await api.put<UserDetailsData>(`${this.userUrl}`, data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }
}
