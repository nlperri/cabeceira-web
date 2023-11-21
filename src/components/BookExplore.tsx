import cover from "../assets/altCover.png";
import { BookVolumeData } from "../@types/bookVolume.type";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

interface BookExploreProps {
  book: BookVolumeData;
}

const BookExplore = ({ book }: BookExploreProps) => {
  const { handleSetBookExploreContent } = useContext(ModalContext);

  return (
    <div>
      <div
        onClick={() => handleSetBookExploreContent(book)}
        className="flex flex-col h-[290px] items-center"
      >
        {book.volumeInfo.imageLinks ? (
          <img
            className=" w-[180px]"
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
          />
        ) : (
          <img className=" w-[180px]" src={cover} alt={book.volumeInfo.title} />
        )}
      </div>
      <div className="flex flex-col gap-1 items-center">
        <p className="">{book.volumeInfo.title.substring(0, 20) + "..."}</p>
        <p className="text-sm text-dark-blue uppercase text-center">
          {book.volumeInfo.authors ? (
            <p>{book.volumeInfo?.authors[0]}</p>
          ) : (
            <p>Desconhecido</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default BookExplore;
