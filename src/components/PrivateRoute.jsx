import { Navigate, Outlet } from "react-router-dom"
import useAuthStatus from "../hooks/UseAuthStatus"

const PrivateRoute = ()=>{
    const {loggedIn, checkStatus} = useAuthStatus()
    if (checkStatus){
        {
            <h1 className="text-4xl p-4 font-bold text-gray-600">Loading...</h1>
          }
    }  

    return loggedIn ? <Outlet/> : <Navigate to ={'/login'}/>
}
export default PrivateRoute;
