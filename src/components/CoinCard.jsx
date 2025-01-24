import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({coin}) => {
  return (
    <div className='p-4 border border-gray-600 rounded-md flex flex-col items-center'>
    <img className='h-24 my-3'
    src={coin.large}></img>
    <h1 className={coin.name.length < 15 ?'text-4xl text-gray-600 font-bold my-2':
        'text-2xl text-gray-600 font-bold my-2'}>{coin.name}</h1>
    <h2 className='text-2xl text-gray-600 font-bold my-2'>Symbol:{coin.symbol}</h2>
    <Link to={`/coin/${coin.id}`} className='py-2 px-4 text-center bg-green-500 text-white w-full my-2 rounded-md md:w-full hover:bg-green-600 duration-200'>View Coin</Link>
  </div>
  )
}

export default CoinCard
