import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
 
 const Navbar = () => {
  return (
    <div>
      <div className="flex justify-evenly bg-black  text-white py-5">

         <NavLink to="/">
          <div> <img src=""/></div>
          </NavLink> 
        <div className="flex align-baseline">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div >
            <IoCartSharp />
            </div>

          </NavLink>
          
          
          
          

          

        </div>

      </div>
    </div>
  )
};
export default Navbar;

 