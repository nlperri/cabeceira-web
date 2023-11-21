import { UserBookDetails } from "../@types/UserBookDetails";
import { UpdateBookData } from "../@types/updateBook.type";
import { api } from "../lib/api";

export class UpdateBookService {
  bookshelfUrl: string = "/bookshelfs";

  async execute(token: string, id: string, data: UpdateBookData) {
    const response = await api.put<UserBookDetails>(
      `${this.bookshelfUrl}/${id}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
}
