import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Coin <span className='gold'>Search</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
