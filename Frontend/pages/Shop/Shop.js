// import React, { useState } from "react";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import Pagination from "../../components/pageProps/shopPage/Pagination";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

// const Shop = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(48);
//   const itemsPerPageFromBanner = (itemsPerPage) => {
//     setItemsPerPage(itemsPerPage);
//   };

//   return (
//     <div className="max-w-container mx-auto px-4" style={{ backgroundColor: '#D5F0C1' }}>
//       <Breadcrumbs title="Products" />
//       {/* ================= Products Start here =================== */}
//       <div className="w-full h-full flex pb-20 gap-10">
//         <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
//           <ShopSideNav />
//         </div>
//         <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
//           <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
//           <Pagination itemsPerPage={itemsPerPage} />
//         </div>
//       </div>
//       {/* ================= Products End here ===================== */}
//     </div>
//   );
// };

// export default Shop;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./style.css";

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the products!', error);
//       });
//   }, []);

//   return (
//     <div className="shop">
//       {products.map(product => (
//         <div key={product.id} className="product">
//           <img src={product.imageUrl} alt={product.productName} />
//           <h2>{product.productName}</h2>
//           <p>{product.description}</p>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import "./style.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(48);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4" style={{ backgroundColor: '#D5F0C1' }}>
      <Breadcrumbs title="Products" />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.productName} />
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <div className="rating">
                  {[...Array(product.rating).keys()].map((_, index) => (
                    <span key={index} className="star">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
