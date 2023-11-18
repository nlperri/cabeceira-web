import { UpdateBookData } from "../@types/updateBook.type";
import { UpdateBookService } from "../service/updateBook.service";

export function useUpdateBook() {
  async function updateBook(token: string, id: string, data: UpdateBookData) {
    return new UpdateBookService().execute(token, id, data);
  }
  return {
    updateBook,
  };
}
