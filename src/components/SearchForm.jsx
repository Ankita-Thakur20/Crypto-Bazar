import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

const [text,setText] = useState('')

const navigate = useNavigate();

const handleSubmit = (e)=>{
e.preventDefault();
navigate(`/coin/search/${text}`);
setText('');
}

  return (
    <>
    
<h1 className="font-bold text-3xl my-2 text-gray-600">Search Your coin here </h1>
<p className="my-2 font-bold text-lg text-gray-700">Get latest updates on any Crypto Currency</p>
<form className="w-full flex items-center justify-center md:flex-row flex-col "
onSubmit={handleSubmit} >
    <input 
    type="text"
     className="w-full border-2 border-gray-300 p-3 rounded-md my-2 md:w-2/4 focus:outline-green-600 md:mr-4" 
     placeholder="Search Coin"
     value={text}
     onChange={e=>setText(e.target.value)}
     required/>
    <button className="w-full md:w-1/4 p-3 rounded-md bg-green-600 font-bold text-white hover:bg-green-800 duration-200" onSubmit={handleSubmit}>Seach</button>
</form>
</>
 
  )
}

export default SearchForm
