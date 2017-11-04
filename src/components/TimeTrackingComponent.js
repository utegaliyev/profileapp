import React from 'react';
import {IconButton, Icon} from 'react-mdl';

const TimeTrackingComponent = () => (
    <div className="dashboardPanel">
        <span className="leftNavBlockTitle"> <Icon name="alarm" />Time Tracking</span>
        <ul>
            <li> <IconButton name="play_arrow" style={{color: 'green'}}/> Start tracking</li>
            <li><IconButton name="replay" style={{color: 'pink'}}/> Last Tracked</li>
        </ul>
    </div>
);

export default TimeTrackingComponent;