import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Cards from './Components/Cards.jsx/Cards'
import Addtocart from './Components/Addtocart/Addtocart'
import NoPage from './Components/notfound/NoPage'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Navbar
        cartCount={cartItems.length}
        setSelectedCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>
        <Route
          path="/addtocart"
          element={<Addtocart cartItems={cartItems} />}
        />

        <Route path='/' element={<Cards
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />}>
        </Route>
        <Route path='*' element={<NoPage />}></Route>
      </Routes>


    </>
  )
}

export default App
