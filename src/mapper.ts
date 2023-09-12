import get from "lodash/get";

import { book } from "./types";

export const Book = (item: any): book => ({
  title: get(item, "title") || "",
  year: get(item, "year") || [],
  publishedDate: get(item, "publishedDate"),
  pageCount: get(item, "pageCount") || "",
  categories: get(item, "categories") || [],
  imageLink: get(item, "imageLinks.thumbnail") || "",
  language: get(item, "language") || "",
  publisher: get(item, "publisher") || "",
});
