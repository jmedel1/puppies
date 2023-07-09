import React from "react";
import { Link } from "react-router-dom";
import './Puppies.css';

function Navbar() {
    const styleTitle = {
        fontWeight: 'bold',
        fontSize: '40px'
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" style={styleTitle}>Home</Link>
                </li>
                <li>
                    <Link to="/puppies" style={styleTitle}>Puppies</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;