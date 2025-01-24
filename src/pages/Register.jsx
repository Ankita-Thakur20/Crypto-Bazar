import { useEffect, useState } from "react";
import FormImage from "../assets/form_image.png";
import {useSelector,useDispatch} from 'react-redux'
import { registerUser } from '../features/auth/authSlice';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Register = () => {
 const {theme} = useSelector(state=>state.coins)
 const{user, isLoading,isError,message} = useSelector((state)=>state.auth) 
 const dispatch = useDispatch()
 const navigate = useNavigate()
 
const [formData, setformdata] = useState({
  name : "",
  email :"",
  password : "",
  password2 :""
})

const {name,email,password,password2} = formData;

const handleChange = (e)=>{
setformdata({...formData , [e.target.name] : e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  if (password !== password2) {
    toast.error("Password Mismatch", { position: "top-center" })
  } else {
    dispatch(registerUser(formData))
  }

}



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
className={theme ? "min-h-screen container px-8 py-8 font-bold bg-gray-900 flex " :
"min-h-screen container flex-col px-8 py-8 font-bold flex "}>

    <div className="container mx-auto py-16  md:p-20  ">
      <div className="shadow border rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between">
      <div className=" w-full md:w-1/2">
      <h1 className="my-3 font-bold text-3xl text-gray-500 ml-2 uppercase">
    Register Here
  </h1>
  <p className="my-3 ml-2 text-sm text-gray-600">
    Kindly Enter Your Details
  </p>
  <form onSubmit={handleSubmit}>
    <input
     type="text"
     className={
      theme? "border border-white bg-gray-900 text-white rounded-md p-2 w-full my-2" :  "border-2 border-whiterounded-md p-2 w-full my-2"}
      placeholder="Enter Name"
      required
      name="name"
      value={name}
      onChange={handleChange}
    />
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
    <input
      type="password"
      className={
        theme? "border border-white bg-gray-900 text-white rounded-md p-2 w-full my-2" :  "border-2 border-whiterounded-md p-2 w-full my-2"}
      placeholder="Confirm Password"
      required
      name="password2"
      value={password2}
      onChange={handleChange}
    />
    <button className="bg-green-600 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-green-700 duration-200">
      Sign Up
    </button>
  </form>
        </div>
        <div className="w-1/2 hidden md:block flex items-center justify-center">
        <img className="h-96" src={FormImage} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
