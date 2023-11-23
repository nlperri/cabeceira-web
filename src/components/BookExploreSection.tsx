import searchIcon from "../assets/searchIcon.svg";
import { useState, useEffect } from "react";
import { useSearchBooks } from "../hooks/useSearchBooks";
import { BookVolumeData } from "../@types/bookVolume.type";
import BookExplore from "./BookExplore";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const BookExploreSection = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchBooks } = useSearchBooks();
  const [isLoading, setIsLoading] = useState(true);
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
  const fetchDataBySearch = async () => {
    try {
      const renderBook = inputValue.length === 0 ? "tecnologia" : inputValue;
      const searchedBooks = await searchBooks(renderBook, 1, 20);
      setBooks(searchedBooks);
      setPage(1);
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
        setIsLoading(false);
        setPage(1);
      } catch (error) {
        console.error(error);
      }
    };
    searchBooksFromApi();
  }, []);

  return isLoading ? (
    <Loading width="50px" height="50px" />
  ) : (
    books.length > 0 && (
      <section className="w-[80%] flex flex-col items-center mt-5 ">
        <div className="relative max-w-[400px] w-[80%]">
          <input
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleInput(e);
            }}
            className="w-full bg-violet-100 rounded-lg h-11 pl-5 outline-blue-950"
            placeholder="Buscar por título"
          />
          <img
            id="searchBooks"
            className="absolute cursor-pointer top-[50%] right-3 translate-y-[-50%]"
            src={searchIcon}
            onClick={fetchDataBySearch}
          />
        </div>
        <InfiniteScroll
          className="custom-infinite-scroll"
          dataLength={books.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
            <div className="p-10 w-full text-center">
              <Loading width="30px" height="30px" />
            </div>
          }
        >
          <div className="w-8/12 mb-16 mt-10">
            <h1 className="text-blue-950 text-2xl font-bold">
              Principais livros
            </h1>
          </div>
          <section
            id="searchResult"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-20"
          >
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
