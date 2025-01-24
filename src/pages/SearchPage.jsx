import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from '../components/CoinCard';
import { searchCoins } from '../features/coinSlice';
import { useParams } from 'react-router-dom';

const SearchPage = () => {

const{coins, isLoading, isSuccess,isError, message} = useSelector((state)=>state.coins)

  const {theme} = useSelector((state)=>state.coins)
  const dispatch = useDispatch();
  const {searchquery} = useParams();

 

  useEffect(()=>{
   dispatch(searchCoins(searchquery))
  },[])

if(isLoading){
    return(
      <div
      className={
        theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900" :"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold"
      }>
        <h1 className='my-10 text-center text-gray-600 text-4xl font-bold'>Searching...</h1>
        </div>
    )
  }
  if(coins.length === 0){
    return(
      <div
      className={
        theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900" :"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold"
      }>
        <h1 className='my-10 text-center text-gray-600 text-4xl font-bold'>No coins Found</h1>
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
    className={
      theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900" :"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold"
    }>
    
    <h1 className="font-bold text-4xl my-10 text-gray-600 text-center">Your Search</h1>
    <div className='my-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
     {
      coins.map((coin)=> <CoinCard key={coin.id} coin={coin}/>)
     }
    </div>
    </div>
  )
}

export default SearchPage;
