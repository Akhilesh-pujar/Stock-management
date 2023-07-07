import { useEffect, useState } from 'react';


// const stocks = [
//     { id: 1, name: "Stock A", quantity: 10, price: 100 },
//     { id: 2, name: "Stock B", quantity: 5, price: 200 },
//     { id: 3, name: "Stock C", quantity: 3, price: 150 },
//   ];
function Table() {
    const [Products, setProducts] = useState([]);

     useEffect (()=>{
    const fetchProducts=async()=>{
      
      const response = await fetch('/api/product');
      let rjson = await response.json()
      setProducts(rjson.Products)
    }
    fetchProducts();
  },[])

  return (
    <div>

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

    {Products?.map((i) => {
      return <tr key={i.slug}>
        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{i.slug}</td>

        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{i.quantity}</td>
        <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{i.price}</td>
      </tr>
})}
  </tbody>
</table>
      
    </div>
  )
}

export default Table
