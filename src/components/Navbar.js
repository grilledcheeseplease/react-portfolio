import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    return (
        <div className='navbar'>
            <div className='toggleButton'>
                <button onClick={() => {setExpandNavbar((prev) => !prev);}} > 
                </button>
            </div>
            <div className='links'>
                <Link to="/"> About Me </Link>
                <Link to="/portfolio"> Portfolio </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/resume"> Resume </Link>
            </div>
        </div>
    );
}

export default Navbar;