import React from 'react'
import './cart.css'

const Addtocart = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>Your cart is empty</h2>
  }

  return (
    <div className="cart-container">
      {cartItems.map((item, index) => (
        <div className="cart-card" key={index}>
          <img src={item.thumbnail} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Addtocart;
