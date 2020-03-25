import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = props => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">
                        Simple
                    </Link>
                </li>
                <li>
                    <Link to="/Home2">
                        With Background
                    </Link>
                </li>
                <li>
                    <Link to="/Home3">
                        Position Bottom
                    </Link>
                </li>
                <li>
                    <a href="https://www.npmjs.com/package/scrolling-based-progressbar" target="_blank">How To Use</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
