import React from 'react';
import {Icon} from 'react-mdl';

const MyIssuesComponent = () => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="date_range" />My Issues</span>
        <ul>
            <li><Icon name="brightness_1" style={{color: 'red'}}/> Bryan Cranston</li>
            <li><Icon name="brightness_1" /> Aaron Paul</li>
        </ul>
    </div>
);

export default MyIssuesComponent;