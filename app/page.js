'use client'

import Navbar from "@/components/Navbar";
import { useState } from 'react';

const stocks = [
  { id: 1, name: "Stock A", quantity: 10, price: 100 },
  { id: 2, name: "Stock B", quantity: 5, price: 200 },
  { id: 3, name: "Stock C", quantity: 3, price: 150 },
];
export default function Home() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

  try{
  const response = await fetch('api/product',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json',
     
    },
    body:JSON.stringify({productName, price,quantity})
  });
  if(response.ok) console.log("Product added successfully");

  else console.log("error while adding product")
  }
  catch(error){
          console.log(error);
  }
  };


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    // Handle search submission, e.g., perform search
    console.log('Search Query:', searchQuery);
    console.log('Selected Category:', selectedCategory);
    // Reset form fields
    setSearchQuery('');
    setSelectedCategory('');
  };
  return (
    <div className="px-6">
     <Navbar/>
     {/* displaying current stockmanage */}
     <div className="container mx-auto">
     <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search a Product</h1>

        <form onSubmit={handlesubmit} className="max-w-md">
          <div className="mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Enter a product name..."
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md"
            >
              <option value="">Select a category...</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>

      {/*---------------------- add product--------------------------------- */}
     <h1 className="text-3xl font-bold mb-6 flex justify-center items-center">Add Product</h1>

<form onSubmit={handleSubmit} className=" flex justify-center items-center">
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      Product slug
    </label>
    <input
      type="text"
      name="productName"
      value={productName}
      onChange={handleProductNameChange}
      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label  className="block text-sm font-medium text-gray-700">
      Quantity
    </label>
    <input
      type="number"
    name="quantity"
      value={quantity}
      onChange={handleQuantityChange}
      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <div className="mb-4">
    <label  className="block text-sm font-medium text-gray-700">
      Price
    </label>
    <input
      type="number"
      name="price"
      value={price}
      onChange={handlePriceChange}
      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    />
  </div>

  <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
    Add Product
  </button>
</form>
        <h1 className="text-3xl font-bold mb-6">Current Stock</h1>

        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm uppercase">ID</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm uppercase">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm uppercase">Quantity</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left font-semibold text-sm uppercase">Price</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.id}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{stock.id}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{stock.name}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{stock.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{stock.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
