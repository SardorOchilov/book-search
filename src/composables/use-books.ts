import axios from "axios";
import { Book } from "../modules/mapper";

export default async function useBooks(search: string) {
  try {
    const data = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${
        search ? search : "programming"
      }&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
    );
    
    return data.data.items.map((item: { id: string, volumeInfo: {} }) =>
      Book(item)
    );
  } catch (error: any) {}
}
