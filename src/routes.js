import React from 'react';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = () => (<div>
    <h2>Topics</h2>
</div>);

const routes = [
    {   path: '/',
        component: Home,
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