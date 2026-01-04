import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ setSelectedCategory, searchTerm, setSearchTerm, cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="nav-container">

      <div className="logo">
        <h3>MiniMart</h3>
      </div>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="nav-search"
      />

      <Link to='/' className='home-link'>
        Home
      </Link>
      <Link to="/addtocart" className="cart-icon">
        <i className="fa-solid fa-basket-shopping fa-2x"></i>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>

      <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <div className="category-buttons">
          <button onClick={() => setSelectedCategory(null)}>All</button>
          <button onClick={() => setSelectedCategory('groceries')}>Groceries</button>
          <button onClick={() => setSelectedCategory('beauty')}>Beauty</button>
          <button onClick={() => setSelectedCategory('furniture')}>Furniture</button>
          <button onClick={() => setSelectedCategory('fragrances')}>Fragrances</button>
        </div>
      </ul>

    </div>
  )
}

export default Navbar
