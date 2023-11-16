import { UserBookDetails } from "../@types/UserBookDetails";


interface BookProps {
    book: UserBookDetails
}

const Book = ({book}: BookProps) => {
    return (
    <div>
        {book.title}
    </div>
    )
}

export default Book;


//Book
// <div className="w-[94px] h-[190px] relative">
{/* <div className="left-[1px] top-[170px] absolute text-blue-950 text-[11px] font-normal font-['Content']">MARK MANSON</div>
<img className="w-[94px] h-36 left-0 top-0 absolute" src="https://via.placeholder.com/94x144" />
<div className="left-[1px] top-[147px] absolute text-black text-xs font-normal font-['Content']">A Sutil Arte de...</div>
</div> */}