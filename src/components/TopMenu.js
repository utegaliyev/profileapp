import React from 'react';
import {Navigation} from 'react-mdl';
import {Link} from 'react-router-dom';
import './TopMenu.css';

const topMenuConfig = [
    {path: '/', title: 'Profile'},
    {path: '/portfolio', title: 'Portfolio'},
    {path: '/contacts', title: 'Contacts'},
    {path: '/address', title: 'Address'},

    {path: '/education', title: 'Education'},
    {path: '/documents', title: 'Documents'},
    {path: '/availibility', title: 'Availibility'},
    {path: '/billing', title: 'Billing'},
];

const TopMenu = ({pathname}) => {
    return (
        <Navigation className="topMenuNavigation">
            {
                topMenuConfig.map((item, index) =>
                    <Link key={'menu'+index} className={item.path===pathname ? 'topMenuActive' : ''} to={item.path}>
                        {item.title}
                    </Link>)
            }
        </Navigation>);
};

export default TopMenu;