import axios from "axios";
import { BookVolumeDataItems } from "../@types/bookVolume.type";

export class SearchBooksService {
  searchBooksUrl: string = "https://www.googleapis.com/books/v1/volumes?q=";

  
  async execute(query: string, page: number, max: number) {
      page = (page - 1) * max
      
    const response = await axios.get<BookVolumeDataItems>(
      `${this.searchBooksUrl}${query}&startIndex=${page}&maxResults=${max}`,
      {
       
      }
    );
    return response.data.items;
  }
}
