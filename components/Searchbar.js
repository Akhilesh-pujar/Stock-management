import React ,{useState}from 'react'

function Searchbar() {
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
    <div >

<h1 className="text-3xl font-bold mb-6">Search a Product</h1>

<form onSubmit={handlesubmit} className="max-w-md">
  <div className="mb-4 ">
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
  )
}

export default Searchbar
