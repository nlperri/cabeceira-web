import { UserBookDetails } from "../@types/UserBookDetails";
import { api } from "../lib/api";

export class AddBookService {
  booksUrl: string = "/books";

  async execute(token: string, id: string) {
    const response = await api.post<UserBookDetails>(
      `${this.booksUrl}/${id}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
}
