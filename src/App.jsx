import "./App.css"
import Products from "./pages/Products"
import { Route,Routes } from "react-router-dom"
import Product from "./pages/Product"
import Header from "./pages/Header"
import CartPage from "./pages/CartPage"
import data from "./data"
import { useState } from "react"

function App() {
   const [items,setItems] = useState(data)
   const [search,setSearch] = useState('')

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Routes>
      <Route path="cart" element={<CartPage />} />
      <Route index element={<Products items={items} setItems={setItems} search={search} />} />
      <Route path="products/:id" element={<Product />} />
      
      </Routes>
    
    </div>
  )
}

export default App
