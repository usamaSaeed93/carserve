import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

function CarouselCards2() {
    useEffect(() => {
        AOS.init(); // Initialize AOS

        return () => {
            AOS.refresh()
        };
    }, []);
    return (
        <div
            className='flex flex-row justify-between items-center h-full relative'
            style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-82939.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714608000&semt=ais")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                <p className='text-xl sm:text-4xl md:text-2xl lg:text-4xl text-white font-extrabold' data-aos="fade-right">Ready For</p>
                <p className='text-2xl sm:texty-5xl md:text-3xl lg:text-5xl text-white font-extrabold' data-aos="fade-up">Road Trip?</p>
                <p className='text-4xl sm:text-6xl md:text-4xl lg:text-7xl font-[1000] text-primaryYellow' data-aos="fade-up">22%</p>
                <div className='flex flex-row justify-center items-center'>
                    <p className='text-xl md:text-2xl lg:text-4xl text-white font-extrabold'>Off</p>
                    <button className='bg-primaryYellow text-white font-bold text-sm md:text-base lg:text-xl px-4 py-2 rounded-lg ml-4'>Shop Now</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src='/slide_asset1.png' alt='gear' className='w-full' data-aos="fade-up" />
            </div>
        </div>
    );
}

export default CarouselCards2;