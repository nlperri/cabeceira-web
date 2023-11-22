import { useContext, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import cover from "../assets/altCover.png";
import closeIcon from "../assets/closeIcon.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import { sectionsData } from "../lib/sectionsData";
import { BookShelfStatus } from "../@types/UserBookDetails";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Id } from "react-toastify";
import { useCookies } from "react-cookie";
import { BookContext } from "../contexts/BookContext";
import { useUpdateBook } from "../hooks/useUpdateBook";
import { useFetchBooks } from "../hooks/useFetchBooks";
import { useDeleteBook } from "../hooks/useDeleteBook";
import DeleteBookModal from "./DeleteBookModal";

interface BookShelfDetailsProps {
  handleSetIsOpen: () => void;
  emmitErrorToast: (message: string, duration: number) => Id;
  emmitSuccessToast: (message: string, duration: number) => Id;
}

const BookShelfDetails = ({
  handleSetIsOpen,
  emmitErrorToast,
  emmitSuccessToast,
}: BookShelfDetailsProps) => {
  const { bookContent, closeModal } = useContext(ModalContext);
  const { setBooks } = useContext(BookContext);
  const { updateBook } = useUpdateBook();
  const { fetchBooks } = useFetchBooks();
  const [deleteModalOpen, SetDeleteBookOpen] = useState(false);

  const [cookies] = useCookies();
  const token = cookies["token"];

  const updateBookSchema = z.object({
    readedPages: z.coerce.number().int().optional().default(0),
    bookshelfStatus: z.enum([
      BookShelfStatus.WANT_TO_READ,
      BookShelfStatus.READING,
      BookShelfStatus.READED,
    ]),
  });

  type updateBookInputs = z.infer<typeof updateBookSchema>;

  const { register, handleSubmit } = useForm<updateBookInputs>({
    resolver: zodResolver(updateBookSchema),
  });

  async function handleUpdateBook(data: updateBookInputs) {

    try {
      if (data.readedPages && data.readedPages > bookContent!.totalPages) {
        return emmitErrorToast(
          "Número de páginas lidas não pode ser maior que número total de páginas",
          1000
        );
      }

      await updateBook(token, bookContent!.id, data);

      const updatedBooks = await fetchBooks(token);
      setBooks(updatedBooks);

      handleSetIsOpen();
      emmitSuccessToast("Livro atualizado com sucesso", 1000);
    } catch (error) {
      emmitErrorToast("Erro ao atualizar livro", 1000);
    }
  }

  function handleDeleteBookModal() {
    SetDeleteBookOpen(previous => !previous)
  }

  if (bookContent?.cover.length == 0) {
    bookContent.cover = cover;
  }
  return (
    bookContent && (
      <div
        className="fixed w-screen h-screen inset-0 flex items-center justify-center z-49 bg-[#35363aa1] text-dark-blue "
        onClick={(e) => closeModal(e)}
      >
        <div
          className="bg-white w-[70%] h-[65%] max-w-[600px] max-[500px]:w-[100%] max-[500px]:h-[80%] rounded-md relative"
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
              <img className="w-[170px]" src={bookContent.cover} />
              <p className="font-bold text-center">{bookContent.title}</p>
              <div>
                {bookContent.authors.map((author) => {
                  return (
                    <p
                      key={author.id}
                      className="text-sm text-dark-blue uppercase my-1"
                    >
                      {author.name}
                    </p>
                  );
                })}
              </div>
              <form onSubmit={handleSubmit(handleUpdateBook)}>
                {bookContent.bookshelfStatus === BookShelfStatus.READING && (
                  <div className="items-center flex flex-col gap-4">
                    <input
                      className=" border-b-2 text-center text-xl focus:outline-none border-gray-500 w-[50%]"
                      {...register("readedPages", {
                        value: bookContent.readedPages
                      })}
                      type="number"
                    />
                    <div className="flex gap-2">
                      <p className="font-bold">Total de páginas:</p>
                      <p>{bookContent.totalPages}</p>
                    </div>
                  </div>
                )}
                <div className="w-full mt-10 flex gap-8 flex-wrap justify-center">
                  <div className="relative">
                    <select
                      {...register("bookshelfStatus")}
                      className="outline-none checked:bg-white active:bg-white font-bold text-sm text-center  border border-pink-salmon w-[210px] bg-white 
                                rounded-md  h-11 text-pink-salmon transition ease-in-out delay-50"
                    >
                      {sectionsData.map((section, it) => {
                        return (
                          <option
                            key={it}
                            className="font-bold"
                            selected={
                              section.status === bookContent.bookshelfStatus
                            }
                            value={section.status}
                          >
                            {section.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="border w-[210px] bg-pink-salmon border-pink-salmon rounded-md  h-11 text-white hover:bg-white hover:text-pink-salmon transition ease-in-out delay-50 font-bold"
                  >
                    Atualizar leitura
                  </button>
                </div>
                <div className="w-full flex justify-center p-2 mt-4">
                  <img onClick={handleDeleteBookModal} className=" cursor-pointer hover:bg-red-900 bg-red-800 px-5 py-1.5 rounded" src={deleteIcon} />
                </div>
              </form>
            </div>
          </div>
        </div>
        {deleteModalOpen && (
          <DeleteBookModal
            handleBookshelfDetailsModal={handleSetIsOpen}
            bookContent={bookContent}
            token={token}
            handleDeleteBookModal={handleDeleteBookModal}
            emmitErrorToast={emmitErrorToast}
            emmitSuccessToast={emmitSuccessToast}
            setBooks={setBooks}
          />
        )}
      </div>
    )
  );
};

export default BookShelfDetails;
