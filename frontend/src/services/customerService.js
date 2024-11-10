import axiosInstance from './axiosInstance';

export const getCustomers = () => {
  return axiosInstance.get('/customers');  
};

export const createCustomer = (customerData) => {
  return axiosInstance.post('/customers', customerData);  
};


