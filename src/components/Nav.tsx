import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/gamedesign">Game Design</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/appreciation">Appreciation</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;

