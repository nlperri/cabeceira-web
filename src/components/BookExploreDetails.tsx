import { useContext } from "react";
import { Id } from "react-toastify";
import { ModalContext } from "../contexts/ModalContext";
import { BookContext } from "../contexts/BookContext";
import { useCookies } from "react-cookie";
import closeIcon from "../assets/closeIcon.svg";
import cover from "../assets/altCover.png";
import { useAddBook } from "../hooks/useAddBook";
import { AxiosError } from "axios";
import { useFetchBooks } from "../hooks/useFetchBooks";

interface BookExploreDetailsProps {
  handleSetIsOpen: () => void;
  emmitErrorToast: (message: string, duration: number) => Id;
  emmitSuccessToast: (message: string, duration: number) => Id;
}

const BookExploreDetails = ({
  handleSetIsOpen,
  emmitErrorToast,
  emmitSuccessToast,
}: BookExploreDetailsProps) => {
  const { bookExploreContent, closeModal } = useContext(ModalContext);
  const { setBooks } = useContext(BookContext);
  const { fetchBooks } = useFetchBooks();
  const { addBook } = useAddBook();
  const [cookies] = useCookies();
  const token = cookies["token"];

  const handleAddBook = async (id: string) => {
    try {
      await addBook(token, id);
      const updatedBooks = await fetchBooks(token);
      setBooks(updatedBooks);
      handleSetIsOpen();
      emmitSuccessToast("Livro adicionado com sucesso", 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        return (
          error.response?.data === "Usuário já possui esse livro." &&
          emmitErrorToast("Livro já foi adicionado", 1000)
        );
      }
      emmitErrorToast("Erro ao adicionar livro", 1000);
    }
  };

  return (
    bookExploreContent && (
      <div
        className="fixed w-screen h-screen inset-0 flex items-center justify-center z-50 bg-[#35363aa1] text-dark-blue font-[Content]"
        onClick={(e) => closeModal(e)}
      >
        <div
          className="bg-white w-[70%] h-[60%] max-[500px]:w-[100%] max-[500px]:h-[70%] max-w-[600px] rounded-md relative"
          id="modalBody"
        >
          <img
            onClick={() => {
              handleSetIsOpen();
            }}
            className="font-bold cursor-pointer w-6 absolute right-2 top-1"
            src={closeIcon}
          />
          <div className="mt-10 flex flex-col items-center">
            <div className="flex flex-col gap-4 items-center">
              {bookExploreContent.volumeInfo.imageLinks ? (
                <img
                  className=" w-[180px]"
                  src={bookExploreContent.volumeInfo.imageLinks?.thumbnail}
                  alt={bookExploreContent.volumeInfo.title}
                />
              ) : (
                <img
                  className=" w-[180px]"
                  src={cover}
                  alt={bookExploreContent.volumeInfo.title}
                />
              )}
              <p className="font-bold text-center">
                {bookExploreContent.volumeInfo.title}
              </p>
              <div className="flex flex-col items-center gap-2">
                {" "}
                {bookExploreContent.volumeInfo.authors ? (
                  <p className="text-sm font-semibold uppercase my-1">{bookExploreContent.volumeInfo.authors[0]}</p>
                ) : (
                  <p className="text-sm font-semibold uppercase my-1">
                    Autor desconhecido
                  </p>
                )}
                <p>Data de publicação: {bookExploreContent.volumeInfo.publishedDate}</p>
                <p>Páginas: {bookExploreContent.volumeInfo.pageCount}</p>
              </div>
              <button
                onClick={() => {
                  handleAddBook(bookExploreContent.id);
                }}
                className="border w-[210px] bg-pink-salmon border-pink-salmon rounded-md  h-11 text-white hover:bg-white hover:text-pink-salmon transition ease-in-out delay-50 font-bold"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default BookExploreDetails;
