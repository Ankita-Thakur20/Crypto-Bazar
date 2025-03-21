import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingCoins } from '../features/coinSlice'
import { Link } from 'react-router-dom'

const TrendingCoins = () => {
    const { isLoading, isSuccess, isError, trendingCoins } = useSelector(state => state.coins)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrendingCoins())
    }, [])



    if (isLoading) {
        return (
            <>
                <h2 className="text-2xl font-semibold text-gray-600">Getting Trending Coins...</h2>
                <h2 className="text-2xl font-semibold text-gray-600">Please Wait...</h2>
            </>
        )
    }

    return (
        <div className="my-3 text-center w-4/5">
            <h2 className="text-2xl font-semibold mb-4 text-gray-600">Trending Coins</h2>
            <div className="my-2 flex items-center justify-center flex-wrap">
                {
                    trendingCoins.map((coin) => {
                        return (
                            <Link to={`coin/${coin?.item?.id}`} className="p-1 px-2 bg-gray-400 font-semibold hover:bg-gray-500 rounded-md m-1">
                                {coin?.item?.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendingCoins
