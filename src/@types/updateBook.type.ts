import { BookShelfStatus } from "./UserBookDetails";

export interface UpdateBookData {
  bookshelfStatus?: BookShelfStatus;
  readedPages?: number;
}
