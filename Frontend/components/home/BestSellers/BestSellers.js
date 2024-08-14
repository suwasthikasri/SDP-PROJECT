import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";


const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10" style={{ backgroundColor: 'FCF5ED' }}>
        <Product
          _id="1011"
          img="https://www.fnp.com/images/pr/l/v200/anniversary-roses-of-love_1.jpg"
          productName="Rose"
          price="35.00"
          color="Red"
          badge={true}
          des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
        />
        <Product
          _id="1012"
          img="https://www.fnp.com/images/pr/l/v200/personalised-rose-gold-half-cuff-bracelet_1.jpg"
          productName="Bracelet"
          price="180.00"
          color="Gray"
          badge={false}
          des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
        />
        <Product
          _id="1013"
          img="https://www.fnp.com/images/pr/l/v200/personalised-hanging-memory-frame_1.jpg"
          productName="Photo Frame"
          price="25.00"
          color="Mixed"
          badge={true}
          des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
        />
        <Product
          _id="1014"
          img="https://www.fnp.com/images/pr/l/v200/personalized-valentine-keyring_4.jpg"
          productName="Key ring"
          price="220.00"
          color="Black"
          badge={false}
          des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
        />
      </div>
    </div>
  );
};

export default BestSellers;
