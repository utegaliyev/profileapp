import React from 'react';
import Profile from './containers/Profile';

const About = () => (<div><h2>About</h2></div>);
const Contacts = () => (<div><h2>Contacts</h2></div>);
const Address = () => (<div><h2>Address</h2></div>);
const Education = () => (<div><h2>Education</h2></div>);
const Documents = () => (<div><h2>Documents</h2></div>);
const Availibility = () => (<div><h2>Availibility</h2></div>);
const Billing = () => (<div><h2>Billing</h2></div>);

const routes = [
    {   path: '/',
        component: Profile,
        exact: true,
        title: 'Profile settings',
    },
    {   path: '/portfolio',
        component: About,
        title: 'Portfolio',
    },
    {   path: '/contacts',
        component: Contacts,
        title: 'Contacts',
    },
    {   path: '/address',
        component: Address,
        title: 'Address',
    },
    {   path: '/education',
        component: Education,
        title: 'Education',
    },
    {   path: '/documents',
        component: Documents,
        title: 'Documents',
    },
    {   path: '/availibility',
        component: Availibility,
        title: 'Availibility',
    },
    {   path: '/billing',
        component: Billing,
        title: 'Billing',
    },
];
export  default routes;