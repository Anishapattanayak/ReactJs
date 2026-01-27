import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <ul>
                {/* link tag:-

                Used to navigate from one route to another
                Does not reload the page
                No styling awareness of the active page */}

                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    {/* navlink tag:-
                     Same as Link tag
                     Knows which route is active
                     Used for menus and navbars
                     Can apply styles or classes automatically*/}

                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? "red" : "white",
                        })}
                    >
                        About
                    </NavLink>

                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
