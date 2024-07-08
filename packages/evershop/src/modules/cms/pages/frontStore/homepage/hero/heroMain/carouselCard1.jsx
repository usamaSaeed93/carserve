import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './carousal.scss'

function CarouselCards() {
    
    useEffect(() => {
        AOS.init(); // Initialize AOS
        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="carousel-container">
        <div className="carousel-text-container">
            <p className="text-6xl carousel-text" data-aos="fade-right">Ready For</p>
            <p className="text-2xl carousel-text" data-aos="fade-up">Road Trip?</p>
            <p className="text-6xl font-[1000] carousel-text primary" data-aos="fade-up">22%</p>
            <div className="flex flex-row justify-center items-center">
                <p className="text-4xl carousel-text">Off</p>
                <button className="carousel-button ">Shop Now</button>
            </div>
        </div>
        <div className="carousel-image">
            <img src="/slide_asset1.png" alt="gear" className="w-full" data-aos="fade-up" />
        </div>
    </div>
    );
}

export default CarouselCards;
