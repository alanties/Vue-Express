import axios from 'axios';

const API_URL = 'http://localhost:3000/api/products';

export const getProducts = async () => {
  return axios.get(API_URL);
};

export const createProduct = async (product: { title: string; prefix: string; postfix: string }) => {
  return axios.post(API_URL, product);
};

export const updateProduct = async (id: number, product: { title: string; prefix: string; postfix: string }) => {
  return axios.put(`${API_URL}/${id}`, product);
};

export const deleteProduct = async (id: number) => {
  return axios.delete(`${API_URL}/${id}`);
};
