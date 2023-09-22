import get from "lodash/get";

import { IEntity } from "./types";

export const Book = (item: any): IEntity.book => ({
  id: get(item, 'id') || '',
  title: get(item.volumeInfo, "title") || "",
  year: get(item.volumeInfo, "year") || [],
  publishedDate: get(item.volumeInfo, "publishedDate"),
  pageCount: get(item.volumeInfo, "pageCount") || "",
  categories: get(item.volumeInfo, "categories") || [],
  imageLink: get(item.volumeInfo, "imageLinks.thumbnail") || "",
  language: get(item.volumeInfo, "language") || "",
  publisher: get(item.volumeInfo, "publisher") || "",
});
