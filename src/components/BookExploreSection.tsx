import searchIcon from "../assets/searchIcon.svg";
import { useState, useEffect } from "react";
import { useSearchBooks } from "../hooks/useSearchBooks";
import { BookVolumeData } from "../@types/bookVolume.type";
import BookExplore from "./BookExplore";
import InfiniteScroll from "react-infinite-scroll-component";

const BookExploreSection = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchBooks } = useSearchBooks();
  const [books, setBooks] = useState<BookVolumeData[]>([]);
  const [page, setPage] = useState(1);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchMoreData = async () => {
    try {
      const renderBook = inputValue.length === 0 ? "tecnologia" : inputValue;
      const searchedBooks = await searchBooks(renderBook, page + 1, 20);
      setBooks((prevBooks) => [...prevBooks, ...searchedBooks]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const searchBooksFromApi = async () => {
      try {
        const renderBook = inputValue.length === 0 ? "tecnologia" : inputValue;
        const searchedBooks = await searchBooks(renderBook, 1, 20);
        setBooks(searchedBooks);
        setPage(1);
      } catch (error) {
        console.error(error);
      }
    };
    searchBooksFromApi();
  }, [inputValue]);

  return (
    books.length > 0 && (
      <section className="w-[80%] flex flex-col items-center mt-5">
        <div className="relative max-w-[400px] w-[80%]">
          <input
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput(e);
            }}
            className="w-full bg-violet-100 rounded-lg h-11 pl-10"
            placeholder="Buscar por título"
          />
          <img
            className="absolute top-[50%] translate-y-[-50%] left-2"
            src={searchIcon}
          />
        </div>
        <InfiniteScroll
          className="custom-infinite-scroll"
          dataLength={books.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <h4 className="p-10 w-full text-center text-blue-950 text-xl font-bold">
              Loading...
            </h4>
          }
        >
          <div className="w-8/12 mb-16 mt-10">
            <h1 className="text-blue-950 text-2xl font-bold">
              Principais livros
            </h1>
          </div>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-20">
            {books.map((book, id) => {
              return <BookExplore key={id} book={book} />;
            })}
          </section>
        </InfiniteScroll>
      </section>
    )
  );
};

export default BookExploreSection;

// onError={()=>{altCover}}
// src={book.volumeInfo.imageLinks.smallThumbnail}

{
  /* <div className="h-[290px] flex items-center">
        <img className=" w-[180px]" src={book.cover} alt={book.title} />
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="">{book.title.substring(0, 20) + "..."}</p>
        <p className="text-sm text-dark-blue uppercase">
          {book.authors[0].name}
        </p>
      </div> */
}
