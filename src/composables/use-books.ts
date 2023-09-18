import axios from "axios";

export async function useBooks(search: string) {
  const data = await axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${
        search ? search : "programming"
      }&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
    )
    return data.data.items
}
