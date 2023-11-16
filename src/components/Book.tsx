import { UserBookDetails } from "../@types/UserBookDetails";
import logo from "../../src/assets/headerLogo.svg";


interface BookProps {
  book: UserBookDetails;
  slider: string
}

const Book = ({ book, slider }: BookProps) => {
  if(book.cover.length == 0) {
    book.cover = logo
  }
  return (
  <div className={`flex flex-col w-[180px] text-center p-1 items-center mt-4 gap-2  ${slider}`}>
    <img className=" w-[180px]" src={book.cover} alt={book.title}/>
    <div className="flex flex-col gap-1 items-center">
    <p className="">{(book.title).substring(0,20) + "..."}</p>
    <p className="text-sm text-dark-blue uppercase">{book.authors[0].name}</p>
    </div>
    <p>{book.readedPages} / {book.totalPages}</p>
  </div>);
};

export default Book;
