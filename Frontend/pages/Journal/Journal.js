import React, { useEffect, useState } from "react";

  import { fetchProducts } from './api'; // Assume you have this function implemented
  import './AdminPage.css'; // Import styles
  
import './AdminPage.css'; // Import styles
const Journal = () => {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const loadProducts = async () => {
        const productsData = await fetchProducts();
        setProducts(productsData);
      };
  
      loadProducts();
    }, []);
  
    return (
      <div className="admin-container"  style={{ backgroundColor: '#D5F0C1' }}>
        <h1>Admin Page</h1>
        
        <section>
          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Brand</th>
                <th>Description</th>
                <th>Category</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>{product.brand}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td><img src={product.imageUrl} alt={product.productName} style={{ width: '50px' }} /></td>
                  <td>
                    <button>View</button>
                    <button>Update</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

export default Journal;
