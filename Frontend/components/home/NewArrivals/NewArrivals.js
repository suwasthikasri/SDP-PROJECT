import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img="https://www.fnp.com/images/pr/l/v200/personalised-black-neck-chain-with-sqaure-pendant_1.jpg"
            productName="Chain with name"
            price="44.00"
            color="Black"
            badge={true}
            des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img="https://www.fnp.com/images/pr/l/v200/vintage-elegance-serving-trays_1.jpg"
            productName="Plates"
            price="250.00"
            color="Black"
            badge={true}
            des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img="https://www.fnp.com/assets/images/custom/personalised_24/v2/tailor_made_treasures/NamePlates.jpg"
            productName="Name plates"
            price="80.00"
            color="Mixed"
            badge={true}
            des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img="https://www.fnp.com/images/pr/l/v200/truck-art-shot-glass-set_1.jpg"
            productName="Glasses"
            price="60.00"
            color="Mixed"
            badge={false}
            des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img="https://www.fnp.com/images/pr/l/v200/kolorobia-blue-pottery-inspired-home-decor-wall-plate_2.jpg"
            productName="Home decor"
            price="60.00"
            color="Mixed"
            badge={false}
            des="The most beautiful and greatest things in all the world cannot be seen or even heard, but felt with the heart"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
