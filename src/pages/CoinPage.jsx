import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCoin } from '../features/coinSlice'
import { addToCart } from '../features/Cart/cartSlice'

const CoinPage = () => {
    const {theme} = useSelector((state)=>state.coins)
    const {id} =useParams()
    const dispatch = useDispatch()

    const handleAddtoCart = (coin)=>{
      dispatch(addToCart(coin))
    }
    
    const {coin, isLoading, isError} = useSelector((state)=>state.coins)

    useEffect(()=>{
    dispatch(getCoin(id))
    },[])
   
    
if(isLoading){
  return(
    <div
    className={
      theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900" :"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold"
    }>
      <h1 className='my-10 text-center text-gray-600 text-4xl font-bold'>Loading...</h1>
      </div>
  )
}

if(isError){
  return(
    <div
    className={
      theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900" :"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold"
    }>
      <h1 className='my-10 text-center text-red-600 text-4xl font-bold'>Error Occured</h1>
      </div>
  )
}
   
  return (
     <div
    className={theme ? "min-h-screen container py-20 px-8 md:px-16 font-bold bg-gray-900" :
    "min-h-screen container flex-col py-20 px-8 md:px-16 font-bold"}>
    
    <div className='border border-gray-800 p-5 rounded-md'>
    <div className='flex items-center md:flex-row flex-col '>
    <img className='h-52 my-3 md:mr-20' src={coin?.image?.large}/>
    <div className='text-center md:text-left mx-3'>
    <h1 className="text-gray-600 font-bold text-3xl">{coin?.name}</h1>
    <h1 className='text-gray-600  font-bold text-2xl uppercase'>{coin?.symbol}</h1>
    <h1 className='text-green-600  font-bold text-2xl'>Price: {coin?.market_data?.current_price?.inr} INR/-</h1>

    <button onClick={()=>handleAddtoCart(coin)} className='bg-green-500 py-2 rounded-md text-center text-white mt-5 w-full'>Add to cart</button>
    </div>
   
    </div>
   
    <div className='text-gray-600 mt-10' dangerouslySetInnerHTML={{__html:coin?.description?.en}}>
    </div>
    <div className='bg-blue-500 py-2 rounded-md text-center text-white mt-5 w-full'>
    <a href={coin?.links?.homepage}>Official Website</a>
    </div>
    
    </div>
    </div>
  )
}

export default CoinPage
