import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
            </nav>
        </header>
    );

}

export default Header;