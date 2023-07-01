import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const cartSize = useSelector(state => state.cart.length)
  return (
    <div className='navbar'>
        <h1 className='logo'>Redux Store</h1>
        <div className='navlink'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cart'>Cart: {cartSize}</NavLink>
        </div>
    </div>
  )
}

export default Navbar