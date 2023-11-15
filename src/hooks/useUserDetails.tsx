import { UserDetailsService } from "../service/userDetails.service";

export function useUserDetails() {
  async function getUser(token: string) {
    return new UserDetailsService().execute(token);
  }
  return {
    getUser,
  };
}
