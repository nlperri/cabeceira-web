import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { UserBookDetails } from "../@types/UserBookDetails";
import { useCookies } from "react-cookie";
import { useFetchBooks } from "../hooks/useFetchBooks";

interface BookContextProps {
  isLoading: boolean;
  books: UserBookDetails[];
  setBooks: Dispatch<SetStateAction<UserBookDetails[]>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

interface BookContextProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextProps>({
  isLoading: true,
  books: [],
  setBooks: () => {},
  setIsLoading: () => true,
});

export function BookContextProvider({ children }: BookContextProviderProps) {
  const { fetchBooks } = useFetchBooks();
  const [books, setBooks] = useState<UserBookDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies();
  const token = cookies["token"];

  useEffect(() => {
    const fetchBooksFromApi = async () => {
      try {
        setIsLoading(true);
        const books = await fetchBooks(token);
        setBooks(books);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooksFromApi();
  }, [token, setBooks, setIsLoading]);

  return (
    <BookContext.Provider
      value={{
        isLoading,
        books,
        setBooks,
        setIsLoading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
