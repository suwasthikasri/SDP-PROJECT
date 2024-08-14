import axios from 'axios';

// Fetch orders
export const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Fetch products
export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
