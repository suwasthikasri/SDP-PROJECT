import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";

import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto" style={{ backgroundColor: '#D5F0C1' }}>
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        
      </div>
    </div>
  );
};

export default Home;
