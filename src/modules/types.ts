export namespace IEntity {
  export interface book {
    id: string;
    title: string;
    year: string[];
    publishedDate: string;
    pageCount: number;
    categories: string[];
    imageLink: string;
    language: string;
    publisher: string;

  }

  export interface bookCard {
    title: string;
    id: string;
    img: string;
    author: string;
  }
}
