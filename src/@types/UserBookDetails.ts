export enum BookShelfStatus {
  WANT_TO_READ,
  READING,
  READED,
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
  totalpages: number;
  cover: string;
  description: string;
  publishedDate: string;
  publisher: string;
  authors: Author[];
}
