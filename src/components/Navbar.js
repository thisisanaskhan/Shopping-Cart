import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
 
 const Navbar = () => {
 const {cart}=useSelector((state)=>state);
  return (
    <div>
      <nav className="flex justify-around bg-black  text-green-500 py-5 max-w-6xl mx-auto">

         <NavLink to="/">
          <div>Shoping Cart</div>
          </NavLink> 
        <div className="flex gap-x-5 ">
          <NavLink to="/">
          <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative" >
            <IoCartSharp className="text-2xl" />
            {
              cart.length>0&&
            
            <span className="absolute -top-1 -right-1 text-black bg-white text-xs rounded-full w-4 flex justify-center items-center animate-bounce h-4">{cart.length}</span>
            }
            </div>

          </NavLink>
          
          
          
          

          

        </div>

      </nav>
    </div>
  )
};
export default Navbar;

 