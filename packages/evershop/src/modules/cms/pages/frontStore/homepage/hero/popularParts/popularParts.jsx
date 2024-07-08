import React from 'react';
import { GiSteeringWheel , GiTireIron } from 'react-icons/gi';
import { PiEngineFill } from 'react-icons/pi';
import { FaCarBattery } from 'react-icons/fa';
import { RiOilLine } from 'react-icons/ri';
import { MdOutlineTireRepair } from 'react-icons/md';


const icons = [
    <GiSteeringWheel className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />,
    <PiEngineFill className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />,
    <FaCarBattery className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />,
    <RiOilLine className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />,
    <MdOutlineTireRepair className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />,
    <GiTireIron className='text-6xl text-primaryYellow hover:text-gray-400 transition-all' />
];

const names = [
    'Suspension',
    'Engine',
    'Battery',
    'Oil',
    'Tire Repair',
    'Tire Iron'
];

function PopularParts() {
    return (
        <div className=''>
            <p className='text-primaryYellow text-3xl font-bold'>Popular parts for your car</p>
            <p className='text-lg pt-3'>View a selection of our most popular car parts</p>
            <div className='flex flex-row justify-between items-center mb-10'>
                {icons.slice(0, 4).map((icon, index) => (
                    <div key={index} className='flex flex-col justify-center items-center w-[20%] h-44 bg-[#F5F5F5] gap-5 cursor-pointer'>
                        {icon}
                        <p className='text-lg'>{names[index]}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row-reverse  justify-between items-center'>
                {icons.slice(0, 4).map((icon, index) => (
                    <div key={index} className='flex flex-col justify-center items-center w-[20%] h-44 bg-[#F5F5F5] gap-5 cursor-pointer'>
                        {icon}
                        <p className='text-lg'>{names[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularParts;
