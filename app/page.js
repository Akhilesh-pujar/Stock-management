'use client'

import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import Table from "@/components/Table";
import {  useState } from 'react';


export default function Home() {
  const [productForm, setProductFrom] = useState({});


  const handleSubmit = async(e) => {
    e.preventDefault();
   

  try{
  const response = await fetch('/api/product',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
     
    },
    body: JSON.stringify(productForm)
  });
  if(response.ok) console.log("Product added successfully");

  else console.log("error while adding product")
  }
  catch(error){
          console.error(error);
  }
  };

  const handlechange =(e)=>{
   setProductFrom({...productForm,[e.target.name]:e.target.value})
  }

  return (
    <div className=" px-6 container mx-auto bg-indigo-300 ">
     <Navbar/>
     {/* displaying current stockmanage */}
     <div className="container mx-auto">
     <div className="container mx-auto">
      <Searchbar/>
      
      {/*---------------------- add product--------------------------------- */}
     <h1 className="text-3xl font-semibold mb-6 flex justify-center items-center">Add Product</h1>

<form  className=" xl:container xl:mx-auto container mx-auto">
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      Product slug
    </label>
    <input
      type="text"
      name="slug"
      
  
      onChange={handlechange}
      className="mt-1 border  hover:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label  className="block text-sm font-medium text-gray-700">
      Quantity
    </label>
    <input
      type="number"
    name="quantity"
   
      onChange={handlechange}
      className="mt-1 border focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label  className="block text-sm font-medium text-gray-700">
      Price
    </label>
    <input
      type="number"
      name="price"
   
      onChange={handlechange}
      className="mt-1 border focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <button onClick={handleSubmit}  type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
    Add Product
  </button>
</form>
        <Table/>
      </div>
    </div>
    </div>
  )
}
