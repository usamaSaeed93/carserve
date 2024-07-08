import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SideUpper2.scss'; // Import the SCSS file

function SideUpper2() {
    useEffect(() => {
        AOS.init(); // Initialize AOS

        return () => {
            AOS.refresh();
        };
    }, []);

    return (
        <div className="side-upper2-container ">
            <div className="content-container">
                <p className="text-xl md:text-2xl lg:text-4xl text-white font-extrabold" data-aos="fade-right">Ready For</p>
                <p className="text-lg md:text-3xl lg:text-5xl text-white font-extrabold" data-aos="fade-up">Road Trip?</p>
                <p className="text-2xl md:text-4xl font-[1000] lg:text-6xl text-primaryYellow" data-aos="fade-up">22%</p>
                <div className="flex flex-row">
                    <p className="text-xl md:text-2xl text-white font-extrabold">Off</p>
                    <button className="shop-now-button">Shop Now</button>
                </div>
            </div>

            <div className="image-container">
                <img src="/banner_img_1.png" alt="gear" className="gear-image" data-aos="fade-up" />
            </div>
        </div>
    );
}

export default SideUpper2;
