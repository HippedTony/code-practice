import axios from 'axios';

const productsAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getProducts = async () => {
  const res = await productsAPI.get('/products');
  return res.data;
};

export const createProduct = async (product) => {
  await productsAPI.post('/products', product);
};

export const deleteProduct = async (id) => {
  await productsAPI.delete(`/products/${id}`);
};

export const updateProduct = async (product) => {
  await productsAPI.put(`/products/${product.id}`, product);
};
