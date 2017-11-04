import React from 'react';
import {Icon} from 'react-mdl';

const DashboardPanelComponent = () => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="view_compact" />Project Dashboard</span>
        <ul>
            <li><Icon name="brightness_1" style={{color: 'red'}}/> Bryan Cranston</li>
            <li><Icon name="brightness_1" /> Aaron Paul</li>
        </ul>
    </div>
);

export default DashboardPanelComponent;