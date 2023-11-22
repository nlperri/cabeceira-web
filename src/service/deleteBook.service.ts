import { api } from "../lib/api";

export class DeleteBookService {
  bookshelfUrl: string = "/bookshelfs";

  async execute(token: string, id: string) {
    const response = await api.delete<String>(
      `${this.bookshelfUrl}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
}
