import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  return (
    <div className={`app${darkMode ? ' app--dark' : ''}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Browse products, filter by category, and add items to your cart.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode((isDarkMode) => !isDarkMode)}
      />

      <div className="category-filter">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        category={category}
        onAddToCart={(product) => setCartItems((items) => [...items, product])}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
