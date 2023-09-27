import React from 'react';
import Slider from 'react-slick';
//import "~slick-carousel/slick/slick.css";  //This causes a nice Astro error
// import "~slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num}>
            <h3>Pretend this is an image, page {num}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
