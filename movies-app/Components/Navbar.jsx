import React from 'react'
import Logo from '../src/assets/react.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to='/'>
    <img src={Logo} />
    </Link>
    </>
  )
}

export default Navbar
