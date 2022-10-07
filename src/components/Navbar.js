import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <Link to="/" className="navabar-brand ml-5 text-decoration text-decoration-none text-white">React redux contact app</Link>
        </nav>
    )
}

export default Navbar
