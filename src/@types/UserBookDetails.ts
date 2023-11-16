export enum BookShelfStatus {
  WANT_TO_READ = "WANT_TO_READ",
  READING = "READING",
  READED = "READED",
}

interface Author {
  name: string;
  id: string;
}

export interface UserBookDetails {
  userId: string;
  bookId: string;
  bookshelfStatus: BookShelfStatus;
  readedPages: number;
  id: string;
  title: string;
  totalPages: number;
  cover: string;
  description: string;
  publishedDate: string;
  publisher: string;
  authors: Author[];
}
