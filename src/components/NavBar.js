import React from 'react'
import {FaCoins, FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavBar.css'


const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaHome className='houseBtn' /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <FaCoins className='icon' />
                <h1> Coin <span className='gold'>List</span></h1>
            </div>
        </Link>
    )
}

export default Navbar
