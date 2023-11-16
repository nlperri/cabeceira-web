import { UserBookDetails } from "../@types/UserBookDetails";

interface BookProps {
  book: UserBookDetails;
  slider: string
}

const Book = ({ book, slider }: BookProps) => {
  return (
  <div className={`flex flex-col w-[180px] items-center mt-4 gap-2 box-border ${slider}`}>
    <img className=" w-[180px]" src={book.cover} alt={book.title}/>
    <div className="flex flex-col gap-1 items-center">
    <p className="">{(book.title).substring(0,20) + "..."}</p>
    <p className="text-sm text-dark-blue uppercase">{book.authors[0].name}</p>
    </div>
    <p>{book.readedPages} / {book.totalPages}</p>
  </div>);
};

export default Book;
