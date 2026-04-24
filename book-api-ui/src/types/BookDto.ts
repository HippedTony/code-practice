export type BookDto = {
  isbn: number;
  title: string;
  author: string;
  description: string;
  category: string;
  price: number;
  bookCover?: string;
  bookCoverUrl?: string;
};
