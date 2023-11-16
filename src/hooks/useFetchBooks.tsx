import { FetchBooksService } from "../service/fetchBooks.service";

export function useFetchBooks() {
  async function fetchBooks(token: string) {
    return new FetchBooksService().execute(token);
  }
  return {
    fetchBooks,
  };
}
