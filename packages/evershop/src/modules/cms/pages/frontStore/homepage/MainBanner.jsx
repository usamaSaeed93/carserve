import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import './MainBanner.scss';
import HeroCarousal from './hero/heroMain/heroCarousal';
import SideUpper from './hero/heroSide/sideUpper';
import SideUpper2 from './hero/heroSide/sideUpper2';
import MegaMenu from '../all/MegaMenu';

export default function MainBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);


  return (
    <>
            <MegaMenu />

    <div className="flex w-[98%] m-auto">
      {/* <Component /> */}
      <div className='flex flex-col lg:flex-row overflow-hidden gap-10'>
        <div className='w-full lg:w-3/4'>
          <HeroCarousal />
        </div>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-5 w-full lg:w-1/4 '>
          <SideUpper />
          <SideUpper2 />
        </div>
      </div>
    </div>
    </>
    
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
