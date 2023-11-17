import Header from "../components/Header";
import BookSection from "../components/BookSection";
import { BookShelfStatus } from "../@types/UserBookDetails";
import { BookContext } from "../contexts/BookContext";
import { useContext } from "react";

const sectionsData = [
  {
    id: 1,
    title: "Quero ler",
    status: BookShelfStatus.WANT_TO_READ,
  },
  {
    id: 2,
    title: "Lendo",
    status: BookShelfStatus.READING,
  },
  {
    id: 3,
    title: "Lidos",
    status: BookShelfStatus.READED,
  },
];

const Home = () => {
  const { books, isLoading } = useContext(BookContext);
  return (
    <div>
      <Header />
      <main className="w-full h-[100vh] flex flex-col items-center justify-around">
        {!isLoading
          ? sectionsData.map((section) => {
              const filteredBooks = books.filter((book) => {
                return book.bookshelfStatus === section.status;
              });
              return (
                <BookSection
                  books={filteredBooks}
                  key={section.id}
                  title={section.title}
                />
              );
            })
          : null}
      </main>
    </div>
  );
};

export default Home;
