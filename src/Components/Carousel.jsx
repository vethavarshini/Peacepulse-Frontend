import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true, // Enabling autoplay
    autoplaySpeed: 2500, // Setting autoplay speed
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className="w-10 h-64 overflow-hidden rounded-lg"> {/* Adjusted size */}
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*BlQaaU2v1ikH6ORXGiq15g.jpeg"
          alt="image1"
          className="w-full h-auto rounded-lg transition-transform duration-2500 ease-in-out"
        />
      </div>
      <div className="w-10 h-64 overflow-hidden rounded-lg"> {/* Adjusted size */}
        <img
          src="https://www.yourtango.com/sites/default/files/image_blog/positivelifequotes%20copy.jpg"
          alt="Image 2"
          className="w-full h-auto rounded-lg transition-transform duration-2500 ease-in-out"
        />
      </div>
      <div className="w-10 h-64 overflow-hidden rounded-lg"> {/* Adjusted size */}
        <img
          src="https://everydaypower.com/wp-content/uploads/2022/10/quality-quotes-19.png"
          alt="Image 3"
          className="w-full h-auto rounded-lg transition-transform duration-2500 ease-in-out"
        />
      </div>
    </Slider>
  );
}

export default Carousel;
