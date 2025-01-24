import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const {theme} = useSelector((state)=>state.coins)
  const {user} = useSelector((state)=>state.auth)
  const {cartItems} = useSelector ((state)=>state.cart)

  const dispatch= useDispatch()


  const handleLogout=()=>{
    dispatch(logoutUser());
  }
 
  return (

    <nav className={theme?"fixed w-full bg-gray-900 border-b border-gray-600 shadow-xl py-4 px-8 md:px-16 flex items-center justify-between" : "fixed w-full bg-white border-2 shadow-lg py-4 px-8 md:px-16 flex items-center justify-between"}>
    <Link to={"/"} className="text-green-500 text-xl uppercase font-black">
      <span className="text-blue-500">Crypto</span>-Bazar
      </Link>
      <span>
        {!user ? (
          <>
            <Link
              className="py-2 px-2 bg-green-600 text-sm font-bold text-white rounded-sm mx-2"
              to="/register"
            >
            Register
            </Link>
            <Link
              className="py-2 px-2 bg-green-600 text-sm font-bold text-white rounded-sm mx-2"
              to="/login"
            >
            Login
            </Link>
          </>
          ) : (
        <>
        <button onClick={handleLogout}
          className="py-2 px-4 bg-red-600 text-sm font-bold text-white rounded-sm mx-2"
          to="/regitser"
          >
            Logout
          </button>

       <Link
      className="py-2 px-5 bg-blue-600 text-sm font-bold text-white rounded-sm mx-2"
      to="/cart"
>
  Cart({cartItems.length})
</Link>
        </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
