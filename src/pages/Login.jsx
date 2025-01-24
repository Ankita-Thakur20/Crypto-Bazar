import { useDispatch, useSelector } from "react-redux";
import FormImage from "../assets/form_image.png";
import { loginUser } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

const {theme} = useSelector(state=>state.coins)

const{user, isLoading,isError,message} = useSelector((state)=>state.auth) 
const dispatch = useDispatch()
const navigate = useNavigate()

const [formData, setformdata] = useState({
  email:"",
  password: "",
})

const handleChange = (e)=>{
  setformdata({...formData , [e.target.name] : e.target.value})
  }


  const handleSubmit = (e)=>{
    e.preventDefault()
      dispatch(loginUser(formData))
    }
  
  
    const {email,password} = formData;

    useEffect(()=>{
      if(user){
        navigate('/')
      }
      if(isError && message){
        toast.error(message,{position:top-center})
      };
      
    },[user,isError,message])

    
  if(isLoading)
    {
      <h1 className="text-4xl p-4 font-bold text-gray-600">Loading...</h1>
    }

return (
<div
className={theme ? "min-h-screen container py-8 px-8 font-bold bg-gray-900 " :
"min-h-screen container flex-col px-8 py-8 font-bold "}>
    <div className="container mx-auto py-16  md:p-20 ">
      <div className="shadow border rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-1/2">
          <h1 className="my-3 font-bold text-gray-500 text-3xl ml-2 uppercase">Log In</h1>
          <p className="my-3 ml-2 text-sm text-gray-600">
            Kindly Enter Your Email & Password
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className={
                theme? "border border-white bg-gray-900 text-white rounded-md p-2 w-full my-2" :  "border-2 border-whiterounded-md p-2 w-full my-2"}
              placeholder="Enter Email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme? "border border-white bg-gray-900 text-white rounded-md p-2 w-full my-2" :  "border-2 border-whiterounded-md p-2 w-full my-2"}
              placeholder="Enter Password"
              required
              name="password"
              value={password}
              onChange={handleChange}
            />
            <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-green-700 duration-200">
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:block">
          <img className="h-96" src={FormImage} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
