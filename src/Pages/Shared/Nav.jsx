import { NavLink } from "react-router";
import { FaFilm } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Trending</NavLink>
      </li>
    </>
  );

  return (
    <>
        <div className="bg-[#06090C] shadow-sm py-4 sticky top-0 z-98 border-b border-[#fcfcfc4b]">
            <div className=''>
                <div className='navbar container'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden cursor-pointer mr-3.5" >
                                <HiMenuAlt3 className="h-8 w-8 text-[#fcfcfc]" />
                            </div>
                            
                            <ul className="menu menu-sm dropdown-content bg-black rounded-box z-2 mt-3 w-52 p-2 shadow px-5 py-3 space-y-1.5 text-[18px] font-bold text-[#2DD4BF] border border-[#fcfcfc5b]">
                                {links}
                            </ul>
                        </div>

                        <NavLink to="/" className="flex items-center gap-1.5 text-[20px] sm:text-[22px] lg:text-[22px] font-bold text-[#2DD4BF]" >
                            <FaFilm />
                            <span className="hidden sm:block">MovieExplorer</span>
                            <span className="block sm:hidden">ME</span>
                        </NavLink>
                    </div>

                    <div className='navbar-center hidden lg:flex'>
                        <ul className='flex items-center gap-6 text-[18px] font-bold text-[#2DD4BF]'>
                            {links}
                        </ul>
                    </div>

                    <div className='navbar-end'>
                        <div>
                            <NavLink to='/movies' className='py-1.5 px-5 bg-[#2DD4BF] rounded-lg text-black border text-[18px] font-semibold'>Browse Movies</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Nav;