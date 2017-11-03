import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';
import './TopMenu.css';

const TopMenu = () => (
    <Navigation className="topMenuNavigation">
        <Link to="/">Profile</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/address">Address</Link>

        <Link to="/">Education</Link>
        <Link to="/">Documents</Link>
        <Link to="/">Availibility</Link>
        <Link to="/">Billing</Link>
    </Navigation>
);

export default TopMenu;