import { useContext } from "react";
import { BookShelfStatus } from "../@types/UserBookDetails";
import Book from "../components/Book";
import { BookContext } from "../contexts/BookContext";

interface BookSectionProps {
  title: string;
  status: BookShelfStatus;
}

const BookSection = ({ title, status }: BookSectionProps) => {
  const { books, isLoading } = useContext(BookContext);

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
        ? books
            .filter((book) => book.bookshelfStatus === status)
            .map((book) => {
              return <Book key={book.id} book={book} />;
            })
        : null}
    </section>
  );
};

export default BookSection;
