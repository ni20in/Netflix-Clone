import React from 'react'
import logo from "../../logo.png"
import { Link } from "react-router-dom"
import { ImSearch } from "react-icons/im"


const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div class="nav-links">
                <ul class="flex">
                  <Link to="/tvshows" >TV Shows</Link>
                  <Link to="/movies" >Movies</Link>
                  <Link to="/recent" >Recently Added</Link>
                  <Link to="/mylist" >My List</Link>
                </ul>
            </div>
            
            <ImSearch />
           

        </nav>
    )
}

export default Header