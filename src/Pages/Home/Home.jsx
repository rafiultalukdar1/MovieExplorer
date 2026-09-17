import React, { useEffect, useState } from 'react';
import banner from '../../assets/movie.jpg'
import { FaAward, FaStar } from 'react-icons/fa6';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then(data => {
                const trending = data
                    .sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0))
                    .slice(0, 4);

                setMovies(trending);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className='py-25'>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-20 items-center">
                        <div className="order-2 lg:order-1">
                            <p className='inline-flex items-center gap-1.5 py-1.5 px-4 bg-[#2dd4be33] text-[12px] sm:text-[14px] text-[#2DD4BF] font-medium rounded-full'>
                                <span></span>
                                <FaAward />
                                <span>12,400+ titles indexed</span>
                            </p>
                            <h2 className='font-bold text-[#FFFFFF] leading-[1.2] py-4 lg:py-6 sm:py-5 text-[32px] sm:text-[38px] md:text-[46px] lg:text-[56px]'>Discover your next{' '}<span className='bg-linear-to-r from-[#2DD4BF] to-[#ffffffb9] bg-clip-text text-transparent'>favorite film.</span>
                            </h2>
                            <p className='max-w-115 text-[16px] lg:text-[18px] text-[#fcfcfc]'>Explore and uncover cinematic world-class stories from every corner of the globe searchable, rated, and beautifully organized.</p>
                            <div className='flex flex-col sm:flex-row sm:items-center pt-6 gap-3'>
                                <div>
                                    <NavLink to='/movies'>
                                        <button className='flex items-center gap-1.5 py-2.5 px-8 text-[16px] font-semibold justify-center bg-linear-to-r from-[#2DD4BF] to-[#0C0C0C] text-white rounded-sm cursor-pointer border border-[#2DD4BF] w-full'>
                                            <span>Explore Movies</span>
                                            <IoArrowForwardOutline />
                                        </button>
                                    </NavLink>
                                </div>
                                <button className='py-2.5 px-8 text-[16px] font-semibold bg-black border border-[#2DD4BF] rounded-sm text-[#fcfcfc] cursor-pointer'>Watch Trailer</button>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className='flex lg:justify-end justify-center'>
                                <img className='w-full max-w-137.5 object-cover rounded-lg bg-[#2dd4be2a] p-3 border border-[#fcfcfc5b]' src={banner} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Trending Movies */}
                    <div className="pt-20">
                        <h2 className="text-[40px] font-bold text-white mb-7">
                            Trending Movies
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {movies.map(movie => (
                                <div key={movie.id} className="bg-[#141414] border border-[#ffffff1a] rounded-lg overflow-hidden" >
                                    <img className="w-full h-80 object-cover" src={movie.image?.medium} alt={movie.name} />
                                    <div className="p-4">
                                        <h3 className="text-white text-[22px] font-semibold truncate">{movie.name}</h3>
                                        <div className="flex items-center justify-between mt-2 text-sm">
                                            <span className="text-[#2DD4BF] flex items-center gap-1.5 text-[18px]">
                                                <FaStar />
                                                {movie.rating?.average || 'N/A'}
                                            </span>
                                            <span className="text-gray-400 text-[18px]">
                                                {movie.premiered?.slice(0, 4)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center mt-10'>
                        <div>
                            <NavLink to='/movies'>
                                <button className='flex items-center gap-1.5 py-2.5 px-10 text-[16px] font-semibold justify-center bg-linear-to-r from-[#2DD4BF] to-[#0C0C0C] text-white rounded-sm cursor-pointer border border-[#2DD4BF]'>
                                    <span>Explore Movies</span>
                                    <IoArrowForwardOutline />
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;