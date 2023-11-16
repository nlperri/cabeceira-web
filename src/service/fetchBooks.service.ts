import { UserBookDetails } from "../@types/UserBookDetails";
import { api } from "../lib/api";

export class FetchBooksService {
  bookshelfUrl: string = "/bookshelfs";

  async execute(token: string) {
    const response = await api.get<UserBookDetails[]>(this.bookshelfUrl, {
      headers: {
        Authorization: token,
        
      },
    });

    return response.data;
  }
}
