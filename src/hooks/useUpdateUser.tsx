import { UpdateUserData } from "../@types/updateUser.type";
import { UpdateUserService } from "../service/updateUser.service";

export function useUpdateUser() {
  async function updateUser(token: string, data: UpdateUserData) {
    return new UpdateUserService().execute(token, data);
  }
  return {
    updateUser,
  };
}
