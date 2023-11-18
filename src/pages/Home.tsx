import Header from "../components/Header";
import BookSection from "../components/BookSection";
import { BookContext } from "../contexts/BookContext";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import BookShelfDetails from "../components/BookshelfDetails";
import { sectionsData } from "../lib/sectionsData";
import { useToast } from "../hooks/useToast";

const Home = () => {
  const { books, isLoading } = useContext(BookContext);
  const { isOpen, handleSetIsOpen } = useContext(ModalContext);
  const { emmitErrorToast, Toast } = useToast();

  return (
    <div>
      <Header />
      <main className="w-full min-h-[100vh] flex flex-col items-center justify-around">
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
      {isOpen && (
        <BookShelfDetails
          handleSetIsOpen={handleSetIsOpen}
          emmitErrorToast={emmitErrorToast}
        />
      )}
      <Toast />
    </div>
  );
};

export default Home;
