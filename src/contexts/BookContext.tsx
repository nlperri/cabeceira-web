import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserBookDetails } from "../@types/UserBookDetails";
import { useCookies } from "react-cookie";
import { useFetchBooks } from "../hooks/useFetchBooks"


interface BookContextProps {
  isLoading: boolean;
  books: UserBookDetails[];
}

interface BookContextProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextProps>({
  isLoading: true,
  books: [],
});

export function BookContextProvider({children}: BookContextProviderProps) {

const { fetchBooks } = useFetchBooks()
    const [books, setBooks] = useState<UserBookDetails[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [cookies] = useCookies()
    const token = cookies["token"]

    useEffect(()=>{
        const fetchBooksFromApi = async () => {
            try {
                const books = await fetchBooks(token)
                setBooks(books)
                setIsLoading(false)
            } catch (error) {   
                console.error(error)
            }
        }
       fetchBooksFromApi()
    },[fetchBooks, token, setBooks])



    return ( 
       <BookContext.Provider value={{
       isLoading,
       books
       }}> 
       {children} 
       </BookContext.Provider>
   ) }