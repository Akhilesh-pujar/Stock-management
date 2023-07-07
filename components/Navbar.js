import React from 'react'

function Navbar() {
  return (
    <header className=" container mx-auto text-black body-font bg-indigo-400">
    <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
      
      <span className="ml-3 font-bold text-xl">Stock Management System</span>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
    
    </div>
  </header>
  )
}

export default Navbar
