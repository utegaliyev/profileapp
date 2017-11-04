import React from 'react';
import Profile from './containers/Profile';

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = () => (<div>
    <h2>Topics</h2>
</div>);

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
        component: Topics,
        title: 'Contacts',
    },
];
export  default routes;