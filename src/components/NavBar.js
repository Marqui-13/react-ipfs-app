import React from 'react'
import {FaCoins, BsHouseFill} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavBar.css'


const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <BsHouseFill className='houseBtn' />
                <FaCoins className='icon' />
                <h1> Coin <span className='gold'>List</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
