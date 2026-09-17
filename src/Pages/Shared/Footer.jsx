import React from 'react';
import { FaFilm } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <>
            <div className="bg-[#06090C] shadow-sm py-10 border-t border-[#fcfcfc4b]">
                <div className="container">
                    <div className='center flex flex-col md:flex-row gap-6 items-center justify-between'>
                        <div>
                            <NavLink to="/" className="flex items-center gap-1.5 text-[22px] sm:text-[22px] lg:text-[20px] font-bold text-[#2DD4BF]" >
                                <FaFilm />
                                <span>MovieExplorer</span>
                            </NavLink>
                        </div>
                        <div>
                            <ul className='flex items-center gap-5'>
                                <li className='text-[#fcfcfcd9] hover:text-white font-semibold text-[16px]'><NavLink to="#">GitHub</NavLink></li>
                                <li className='text-[#fcfcfcd9] hover:text-white font-semibold text-[16px]'><NavLink to="#">Twitter</NavLink></li>
                                <li className='text-[#fcfcfcd9] hover:text-white font-semibold text-[16px]'><NavLink to="#">API</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-[15px] text-[#fcfcfcd9]'>© 2026 MovieExplorer. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;