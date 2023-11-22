import closeIcon from "../assets/closeIcon.svg";
import { Id } from "react-toastify";
import { UserBookDetails } from "../@types/UserBookDetails";
import { UserDetailsData } from "../@types/UserDetailsData.type";
import { useDeleteBook } from "../hooks/useDeleteBook";
import { useFetchBooks } from "../hooks/useFetchBooks";

interface DeleteBookProps {
    handleBookshelfDetailsModal: () => void
    bookContent: UserBookDetails | null;
    token: string;
    handleDeleteBookModal: () => void;
    emmitErrorToast: (message: string, duration: number) => Id;
    emmitSuccessToast: (message: string, duration: number) => Id;

    setBooks: (value: React.SetStateAction<UserBookDetails[]>) => void
}


const DeleteBookModal = ({ bookContent, token, emmitErrorToast, emmitSuccessToast, setBooks, handleDeleteBookModal, handleBookshelfDetailsModal }: DeleteBookProps) => {
    const { fetchBooks } = useFetchBooks();
    const { deleteBook } = useDeleteBook();


    async function DeleteBook() {
        try {
            await deleteBook(token, bookContent!.id);

            const updatedBooks = await fetchBooks(token);
            setBooks(updatedBooks);

            handleDeleteBookModal();
            handleBookshelfDetailsModal()
            emmitSuccessToast("Livro deletado com sucesso", 1000);
        } catch (error) {
            emmitErrorToast("Erro ao Deletar livro", 1000);
        }
    }

    return (
        bookContent && (
            <div className="absolute h-full w-full bg-gradient-to-r bg-gray-600/60 backdrop-blur-md">
                <div className=" bg-gradient-to-r from-gray-800 to-slate-600 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] h-[150px] rounded text-white font-[Content] flex flex-col justify-center items-center px-4 py-2 font-bold gap-6">
                    <h2>Realmente deseja deletar esse livro?</h2>
                    <div className="flex w-full justify-around m-3">
                        <div onClick={handleDeleteBookModal} className="cursor-pointer  hover:bg-gray-400  hover:text-white text-center bg-white text-black p-1 px-2 rounded">Manter</div>
                        <div onClick={DeleteBook} className="cursor-pointer hover:bg-red-500 hover:text-white text-center bg-white text-red-500 p-1 px-2 rounded">Deletar</div>
                    </div>
                </div>
            </div>
        )
    );
};


export default DeleteBookModal;