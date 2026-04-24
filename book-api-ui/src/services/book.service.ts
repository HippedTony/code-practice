import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllBooks = async () => {
  return await axios.get(`${BASE_URL}/all-books`);
};

export const getBook = async (isbn: number) => {
  return await axios.get(`${BASE_URL}/get-book/${isbn}`);
};

export const addBook = async (formData: FormData) => {
  return await axios.post(`${BASE_URL}/add-book`, formData);
};

export const updateBook = async (formData: FormData, isbn: number) => {
  return await axios.put(`${BASE_URL}/update-book/${isbn}`, formData);
};

export const deleteBook = async (isbn: number) => {
  return await axios.delete(`${BASE_URL}/delete/${isbn}`);
};
