import React, { useEffect, useState } from 'react'
import './cards.css'
import axios from 'axios'

const Cards = ({ selectedCategory, searchTerm, setCartItems }) => {
  const [carts, setCarts] = useState([])
  const [filteredCarts, setFilteredCarts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products')
        setCarts(res.data.products)
        setFilteredCarts(res.data.products)
      } catch (err) {
        alert(err.message)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = carts

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredCarts(filtered)
  }, [selectedCategory, searchTerm, carts])

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  return (
    <div className="card-container">
      <div className="product-container">
        {filteredCarts.map(item => (
          <div className="cards" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div className="card-body">
              <h2>{item.title.slice(0, 14) + "..."}</h2>
              <h5>Price: ${item.price}</h5>
              <p>Shipping 3-6 days</p>
              <h4 className='stock'>{item.stock > 0 ? 'In Stock' : 'Out of Stock'}</h4>

              <div className="btn">
                <button
                  className="btn1"
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock === 0}>
                  Add to Cart
                </button>

                <button className='btn2'>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
