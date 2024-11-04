import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <NavLink><li><a className="font-semibold">Home</a></li></NavLink>
            <NavLink><li><a className="font-semibold">Statistics</a></li></NavLink>
            <NavLink><li><a className="font-semibold">Dashboard</a></li></NavLink>
            <NavLink><li><a className="font-semibold">siam</a></li></NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink><li><a className="font-semibold">Home</a></li></NavLink>
            <NavLink><li><a className="font-semibold">Statistics</a></li></NavLink>
            <NavLink><li><a className="font-semibold">Dashboard</a></li></NavLink>
            <NavLink><li><a className="font-semibold">siam</a></li></NavLink>
            
            
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button className="border rounded-full p-1 flex"><img src="https://img.icons8.com/?size=25&id=TmwMMf8vZgfS&format=png" alt="" /></button>
         <button className="border rounded-full p-1"> <img src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" /></button>
        </div>
      </div>
    );
};

export default Navbar;