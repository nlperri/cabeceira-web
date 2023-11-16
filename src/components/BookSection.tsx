import { useCookies } from "react-cookie";
import { useFetchBooks } from "../hooks/useFetchBooks";
import { useEffect, useState } from "react";
import { UserBookDetails } from "../@types/UserBookDetails";
import Book from "../components/Book";

interface BookSectionProps {
  title: string;
}

const BookSection = ({ title }: BookSectionProps) => {
  const { fetchBooks } = useFetchBooks();
  const [books, setBooks] = useState<UserBookDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cookies] = useCookies();
  const token = cookies["token"];

  useEffect(() => {
    const fetchBooksFromApi = async () => {
      try {
        const books = await fetchBooks(token);
        console.log(books);
        setBooks(books);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooksFromApi();
  }, [token, setBooks]);

  return (
    <section className="w-6/12 bg-red-500">
      {!isLoading ? (
        <div className="flex items-center gap-1">
          <h1 className="text-dark-blue text-3xl font-bold">{title}</h1>
          <h3 className="text-dark-blue text-lg font-bold">
            ({books.length} livro)
          </h3>
        </div>
      ) : null}
      {books.length > 0
        ? books.map((book) => {
            return <Book key={book.id} book={book} />;
          })
        : null}
    </section>
  );
};

export default BookSection;

//BookSection
{
  /* <div className="w-36 h-11 justify-center items-center gap-1 inline-flex">
<div className="text-blue-950 text-2xl font-bold font-['Content']">Lendo</div>
<div className="text-blue-950 text-base font-bold font-['Content']">(1 livro)</div>
</div> */
}
