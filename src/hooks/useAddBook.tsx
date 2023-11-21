import { AddBookService } from "../service/addBook.service";

export function useAddBook() {
  async function addBook(token: string, id: string) {
    return new AddBookService().execute(token, id);
  }
  return {
    addBook,
  };
}
