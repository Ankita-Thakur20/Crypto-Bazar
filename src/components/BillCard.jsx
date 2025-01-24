import React from 'react'

const BillCard = ({cartItems}) => {

const total = cartItems.reduce((p,c)=> p+c.market_data?.current_price?.inr,0)
return (
<div className=" flex flex-col justify-between h-64 border p-5 col-span-1 rounded-md border-gray-700 ">
<h1 className="text-gray-600 font-semibold text-xl text-center uppercase">Your Bill</h1>
<h2 className="text-gray-600 font-semibold text-2xl">Your Qty. : {cartItems.length}</h2>
<h2 className="text-gray-600 font-bold text-3xl"> Total amount : {total}</h2>
<button className="my-2 bg-blue-600 py-2 px-4 w-full rounded-md text-sm font-bold text-white">Pay Now</button>
</div>
  )
}

export default BillCard
