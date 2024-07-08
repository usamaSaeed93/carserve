import React, { useState } from 'react';
import './MegaMenu.scss';

const MENU_ITEMS = [
    {
        title: 'LED & LIGHTENING',
        categories: [
            'Backlights/Backlamps',
            'Dome/Roof SMD & LED',
            'Flexible DRL Switchbacks',
            'HID & LED Bulbs',
            'LED Bar Lights',
            'Side Marker Lamps',
            'Third Brake Lamps',
            'Interior LED Lights',
            'Bumper Fog Lamps',
            'EL Glow Wires',
            'Fog Lamp DRL Covers',
            'LED & Rubber Sill Plates',
            'LED Logos',
            'Strip Lights',
            'Jeep Lights',
            'Day Time Running Lights',
            'Flasher Lights',
            'Headlights/Headlamps',
            'LED & SMD Lights',
            'Parking SMD & LED',
            'Switch & Buttons'
        ]
    },
    {
        title: 'EXTERIOR',
        categories: [
            'Grills & Grille Guards',
            'Bumpers & Bumper Guards',
            'Body Kits & Spoilers',
            'Window Tint & Shades',
            'Side Steps & Running Boards',
            'License Plate Frames',
            'Mirrors & Covers',
            'Emblems & Badges',
            'Mud Flaps & Splash Guards',
            'Fender Flares & Trim'
        ]
    },
    {
        title: 'INTERIOR',
        categories: [
            'Seat Covers',
            'Floor Mats & Liners',
            'Steering Wheel Covers',
            'Dash Kits',
            'Shift Knobs & Boots',
            'Pedals & Pedal Covers',
            'Sun Shades',
            'Interior Trim',
            'Cargo Liners & Mats',
            'Seat Cushions'
        ]
    },
    {
        title: 'CAR CARE',
        categories: [
            'Car Wash & Cleaning',
            'Polishes & Waxes',
            'Detailing Tools',
            'Glass Care',
            'Interior Cleaners',
            'Tire & Wheel Care',
            'Pressure Washers',
            'Vacuum Cleaners',
            'Scratch & Swirl Removers',
            'Protectants & Dressings'
        ]
    },
    
    {
        title: 'GADGETS',
        categories: [
            'Dash Cams',
            'GPS Navigation',
            'OBD-II Scanners',
            'Bluetooth Devices',
            'Backup Cameras',
            'Car Audio',
            'Remote Starters',
            'Smartphone Mounts',
            'Charging Accessories',
            'Radar Detectors'
        ]
    }
  
];


function MegaMenu() {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <nav className="mega-menu">
            <ul className="menu-items">
                {MENU_ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className="menu-item"
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {item.title}
                        {hoveredItem === index && (
                            <div className="dropdown">
                                <div className="dropdown-content">
                                    {item.categories.map((category, idx) => (
                                        <a href="#" key={idx} className="dropdown-item">
                                            {category}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MegaMenu;
