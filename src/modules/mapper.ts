import get from "lodash/get";

import { IEntity } from "./types";

export const Book = (item: any): IEntity.book => ({
  title: get(item, "title") || "",
  year: get(item, "year") || [],
  publishedDate: get(item, "publishedDate"),
  pageCount: get(item, "pageCount") || "",
  categories: get(item, "categories") || [],
  imageLink: get(item, "imageLinks.thumbnail") || "",
  language: get(item, "language") || "",
  publisher: get(item, "publisher") || "",
});
