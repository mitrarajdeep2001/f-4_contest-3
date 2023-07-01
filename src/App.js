import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import { Provider } from 'react-redux'
import store from './Store/Store'
// import Products from './Components/Products'

const App = () => {
  return (
    <div className='App'>
    <Provider store={store}>
        <BrowserRouter >
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            {/* <Route path='/product' element={<Products/>}/> */}
          </Routes>
        </BrowserRouter>

    </Provider>
    </div>
  )
}

export default App