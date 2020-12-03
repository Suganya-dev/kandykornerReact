import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
    <ul className="navbar">
        <li className="navbar__item active">
                <Link className="navbar__link" to="/">Nashville Kandykorner</Link>
         </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Locations</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Employees</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/productTypes">productTypes</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/Customers">customers</Link>
        </li>
        <li className="navbar__item">
                <Link className="navbar__link" to="/Myorder">My Order</Link>
        </li>
       
    </ul>
    )
}