import { DeleteBookService } from "../service/deleteBook.service";

export function useDeleteBook() {
  async function deleteBook(token: string, id: string) {
    return new DeleteBookService().execute(token, id);
  }
  return {
    deleteBook,
  };
}