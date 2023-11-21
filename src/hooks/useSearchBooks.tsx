import { SearchBooksService } from "../service/searchBooks.service";

export function useSearchBooks() {
  async function searchBooks(query: string, page: number, max: number) {
    return new SearchBooksService().execute(query, page, max);
  }
  
  return {
    searchBooks,
  };
}
