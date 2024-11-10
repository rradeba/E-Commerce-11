import axiosInstance from './axiosInstance';

export const getProducts = () => {
  return axiosInstance.get('/products'); 
};

export const createProduct = (productData) => {
  return axiosInstance.post('/products', productData);  
};
