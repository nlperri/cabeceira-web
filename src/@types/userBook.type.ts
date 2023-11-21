import { Author, BookShelfStatus } from "./UserBookDetails";
import { UserDetailsData } from "./UserDetailsData.type";

export interface UserBookData {
  user: UserDetailsData;
  book: BookDetailsData;
  bookshelfStatus: BookShelfStatus;
  readedPages: number;
}

interface BookDetailsData {
  id: string;
  title: string;
  totalPages: string;
  cover: string;
  description: string;
  publishedDate: string;
  publisher: string;
  authors: Author[];
}
