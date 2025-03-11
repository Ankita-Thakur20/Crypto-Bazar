
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import TrendingCoins from "../components/TrendingCoins";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = () => {

const {theme} = useSelector((state)=>state.coins)
const {user,message,isError,isLoading} = useSelector((state)=>state.auth)

const navigate = useNavigate()

useEffect(()=>{
    if(!user){
        navigate('/login')
    }else{
        navigate('/')
    }
    if(isError && message){
        toast.error(message,{position:'top-center'})
    }
},[user,isError,message])

if(isLoading)
    {
      <h1 className="text-4xl p-4 font-bold text-gray-600">Loading...</h1>
    }

return (
<div
className={theme ? "min-h-screen container py-16 px-8 md:px-16 font-bold bg-gray-900 flex items-center flex-col justify-center" :
"min-h-screen container flex-col py-16 px-8 md:px-16 font-bold flex items-center justify-center"}>
<SearchForm/>
<TrendingCoins/>
</div>
)
};

export default Home;

