import { useContext, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import cover from "../assets/altCover.png";
import closeIcon from "../assets/closeIcon.svg"
import {sectionsData} from "../lib/sectionsData"

import { BookShelfStatus } from "../@types/UserBookDetails";

interface BookShelfDetailsProps {
    handleSetIsOpen: () => void;
}

const BookShelfDetails = ({ handleSetIsOpen }: BookShelfDetailsProps) => {
    const { bookContent, closeModal } = useContext(ModalContext);
    const readedPages = bookContent ? bookContent.readedPages : 0
    const [input, setInput] = useState(readedPages.toString());

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const numericValue = parseInt(inputValue)
        setInput(numericValue.toString())
    }


    if (bookContent?.cover.length == 0) {
        bookContent.cover = cover;
    }

    return (
        bookContent &&
        <div className="fixed w-screen h-screen inset-0 flex items-center justify-center z-50 bg-[#35363aa1] text-dark-blue " onClick={e => closeModal(e)}>
            <div className="bg-white w-[70%] h-[70%] max-w-[600px] rounded-md relative"
                id="modalBody">
                <img onClick={() => { handleSetIsOpen() }} className="font-bold cursor-pointer w-6 absolute right-2 top-1" src={closeIcon} />
                <div className="mt-10 flex flex-col items-center">
                    <div className="flex flex-col gap-4 items-center">
                        <img className="w-[170px]" src={bookContent.cover} />
                        <p className="font-bold text-center">{bookContent.title}</p>
                        <div>
                            {bookContent.authors.map(author => {
                                return (
                                    <p className="text-sm text-dark-blue uppercase my-1">{author.name}</p>
                                )
                            })}
                        </div>
                        {bookContent.bookshelfStatus === BookShelfStatus.READING && (
                            <div className="items-center flex flex-col gap-4">
                                <input
                                    className=" border-b-2 text-center text-xl focus:outline-none border-gray-500 w-[50%]"
                                    value={input}
                                    type="number"
                                    onChange={(e) => onChangeInput(e)}
                                    max={bookContent.totalPages}
                                />
                                <div className="flex gap-2">
                                    <p className="font-bold">Total de páginas:</p>
                                    <p>{bookContent.totalPages}</p>
                                </div>
                            </div>
                        )}
                        <div className="w-full mt-16 flex gap-8 flex-wrap justify-center">
                            <div className="relative">
                                <select className="outline-none checked:bg-white active:bg-white font-bold text-sm text-center  border border-pink-salmon w-[210px] bg-white 
                                rounded-md  h-11 text-pink-salmon transition ease-in-out delay-50">
                                    {sectionsData.map((section , it)=> {
                                        return (
                                            <option key={it} className="font-bold " 
                                            selected={(section.status === bookContent.bookshelfStatus)} 
                                            value={section.status}>{section.title}</option>
                                        )
                                    })}
                                </select>
                                
                            </div>
                            <button className="border w-[210px] bg-pink-salmon border-pink-salmon rounded-md  h-11 text-white hover:bg-white hover:text-pink-salmon transition ease-in-out delay-50 font-bold">Atualizar leitura</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default BookShelfDetails