import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousal.scss'; // Import the custom SCSS file
import CarouselCards from './carouselCard1';
import CarouselCards2 from './carousalCard2';
import CarouselCards3 from './carousalCard3';

export default function HeroCarousal() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging (i) {
      return <div className="w-4 h-4 bg-white rounded-full" />;
    },
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
          margin: '0px'
        }}
      >
        <ul style={{ display: 'flex', gap: '10px' }}>{dots}</ul>
      </div>
    )
  };

  return (
    <div className="rounded-xl">
      <Slider {...settings}>
        <div>
          <CarouselCards />
        </div>
        <div>
        <CarouselCards />
        </div>
        <div>
        <CarouselCards />
        </div>
      </Slider>
    </div>
  );
}
