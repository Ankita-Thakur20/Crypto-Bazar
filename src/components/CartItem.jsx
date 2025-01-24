import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../features/Cart/cartSlice'

const CartItem = ({cart}) => {
    const dispatch = useDispatch()

    const handleRemoveFromCart = (id)=>{
        dispatch(removeFromCart(id))
    }

return (
<div className=" relative border border-gray-600 my-2 rounded-md p-4 flex items-center justify-center">
  <img className= 'h-28'src={cart?.image?.large} alt=""></img>
<div className="mx-6">
<h1 className="text-2xl font-semibold text-gray-600">{cart.name}</h1>
  <h2 className="text-xl font-semibold text-gray-600">Price: {cart?.market_data?.current_price?.inr} INR/-</h2>
  <h2 className="text-lg font-semibold text-gray-600">Qty.</h2>
</div>
<button onClick={()=>handleRemoveFromCart(cart.id)} className="bg-red-600 py-1 px-4 text-sm text-white font-bold text-white rounded-sm absolute right-5 bottom-5">Remove</button>
</div>
  )
}

export default CartItem
