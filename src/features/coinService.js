import axios from "axios";



const fetchTrendingCoins = async()=>{
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    return response.data.coins;
}

const fetchSearchCoin = async(query)=>{
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
    return response.data.coins;
}



const fetchCoin = async(id)=>{
    const response = await axios.get( `https://api.coingecko.com/api/v3/coins/${id}`)
    console.log(response.data)
    return response.data;
}
 
const coinService = {fetchTrendingCoins, fetchSearchCoin,fetchCoin}
export default coinService;