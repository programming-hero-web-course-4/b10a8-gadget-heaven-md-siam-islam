import { NavLink,useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation();

 

  const navbar = () => {
    if (location.pathname.startsWith('/Statistics')) {
      return { backgroundColor: 'white', color: 'black' };
    }
    else if(location.pathname.startsWith('/dashboard')){
      return { backgroundColor:'white' , color : 'black'}
    }
  
    switch (location.pathname) {
      case '/dashboard':
      case '/History':
      case '/contact':
        return { backgroundColor: 'white', color: 'black' };
      default:
        return { backgroundColor: 'blueviolet', color: 'white' };
    }
  };
  
    return (
        <div className=" bg-[#9538E2] rounded-t-2xl " style={navbar()}>
       <div className="navbar px-10">
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
               <NavLink to="/"className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Home</a></li></NavLink>
            <NavLink to='/Statistics' className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl '}`} ><li><a className="font-semibold">Statistics</a></li></NavLink>
            <NavLink to="/dashboard" className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`} ><li><a className="font-semibold">Dashboard</a></li></NavLink>
            <NavLink to="/History"  className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Chart</a></li></NavLink>
            <NavLink to="/contact"  className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Contact us</a></li></NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/"className={({isActive}) => `${isActive? "bg-white text-[#9538E2] rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Home</a></li></NavLink>
            <NavLink to='/Statistics' className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl '}`} ><li><a className="font-semibold">Statistics</a></li></NavLink>
            <NavLink to="/dashboard" className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`} ><li><a className="font-semibold">Dashboard</a></li></NavLink>
            <NavLink to="/History"  className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Chart</a></li></NavLink>
            <NavLink to="/contact"  className={({isActive}) => `${isActive? "bg-[#9538E2] text-white rounded-xl" : 'hover:bg-[#9538E2] rounded-xl'}`}><li><a className="font-semibold">Contact us</a></li></NavLink>
            
            
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <button className="border rounded-full p-1 flex relative bg-white"><img src="https://img.icons8.com/?size=25&id=TmwMMf8vZgfS&format=png" alt="" />
          <span className="absolute left-4 bottom-6 "></span>
          </button>
         <button className="border rounded-full p-1 relative bg-white"> <img src="https://img.icons8.com/?size=24&id=86721&format=png" alt="" />
         <span className="absolute left-4 bottom-6"></span></button>
        </div>
       </div>
      </div>
    );
};

export default Navbar;