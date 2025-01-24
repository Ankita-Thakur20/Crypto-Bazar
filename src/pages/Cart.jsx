import React from "react";
import { useSelector } from "react-redux";
import BillCard from "../components/BillCard";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {theme} = useSelector((state)=>state.coins)
  const {cartItems} = useSelector((state)=>state.cart)

  return (
<div
className={theme ? "min-h-screen container py-20 px-8 md:px-16 font-bold bg-gray-900 " :
"min-h-screen container flex-col py-20 px-8 md:px-16 font-bold flex "}>
<div className="p-4 border border-gray-700 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border p-5 col-span-1 rounded-md md:col-span-2">
{
  cartItems.map((cart)=><CartItem key={cart.id} cart={cart}/>)
}
</div>
<BillCard cartItems={cartItems}/>
</div>
</div>

  )
};

export default Cart;
