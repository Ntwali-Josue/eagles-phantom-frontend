import React from 'react';
import { Link, NavLink} from 'react-router-dom'
 const Navbar = () => {

return (
    <nav>
        <div>
            <ul>
                <li><Link to="/Logout">Logout</Link></li>
                <li><Link to="/Home">Home</Link></li>
                
            </ul>
        </div>
    </nav>
)




}

export default Navbar;
